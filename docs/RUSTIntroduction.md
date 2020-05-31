---
id: rust
title: Introducing RUST
sidebar_label: Introducing RUST
---



[Google slides link](https://docs.google.com/presentation/d/1Ckv7qiUWXn8cFWYX6YdzeczI7uV1cIl8J3O6wdsZfL8/edit#slide=id.g7dd780854c_0_97)

## **Technical Details about Rust**

1. Compiled language ( no byte code, no GC; Only machine code)
2. Strong, static typing
3. No GC or runtime
    1. 👎  Implications:
        1. Need to explicit handle dereferencing of variables, structures, enum
4. Elaborate type system
5. Imperative, but with functional aspects

## **Comparison**

### **vs Python**

1. Much faster
2. Much lower memory use
3. Python has no multi-threading
4. Algebraic data types -- Write nice code in spite of types
5. Pattern Matching -- Write nice code in spite of types
6. Less runtime errors. Rust compiler is very powerful

### **vs Java**

1. No JVM or GC pauses
2. Much lower memory use
3. Rust has zero-cost abstractions
4. In java if you had abstraction and interface, it will result in less performance.
5. In Rust, abstractions are dealt at compile-time, so no performance hit
6. `ConcurrentModificationException`
7. Java has data races resulting in CMException
8. Pattern matching
9. Unified build system
10. Maven/Ant is tedious.
11. Rust cargo deals with it
12. Dependency management

### **vs C/C++**

1. No segfaults
2. No buffer overflows
3. No null poiners
4. No data races
5. Powerful type system
6. Unified build system
7. Dependency management

### **vs Go**

1. No GC pauses in Rust; lower memory use
2. Go has GC pauses
3. No null pointers in Rust
4. Go has null values that you have to remember null values
5. Nicer error handling
6. Go; you have to remember how to error handle explicitly
7. Safer concurrency
8. Go has easier concurrency
9. Stronger type system
10. Zero-cost abstractions
11. Dependency Management

## 👍 **Rust Features**

### **Modern language**

1. Nice and efficient generics

    ```rust
    struct MyVec<T> {
    // ...
    }

    impl<T> MyVec<T> {
    pub fn find<P>(&self, predicate: P) -> Option<&T>
    where P: Fn(&T) -> bool
    {
        for v in self {
        if predicate(v) {
            return Some(v);
        }
        }
        None // Rust does not have NULL, but provides an enum Option which can encode the concept of a value being present or absent
    }
    }
    ```

2. Algebraic data types and Pattern matching

    ```rust
    // Option<T> is an enum that is either Some(T) or None
    if let Some(f) = my_vec.find(|t| t >= 42) {
    /* found */
    }

    enum DecompressionResult {
    Finished { size: u32 },
    InputError(std::io::Error),
    OutputError(std::io::Error),
    }

    // this will not compile:
    match decompress() {
    Finished { size } => { /* parsed successfully */ }
    InputError(e) if e.is_eof() => { /* got EOF */ }
    OutputError(e) => { /* output failed with error e */ }
    }
    ```

3. Modern toolchain that ships with the language

### **ADT + Pattern Matching**

In enum, you have to match every enum key. If not, compiler gives error. 

### **Tooling**

### Testing

1. Rust has inline test execution and documentation
2. Friendly errors

    ```rust
    #[test]
    fn it_works() {
    assert_eq!(1 + 1, 2);
    }

    /// Returns one more than its argument.
    ///
    /// ```
    /// assert_eq!(one_more(42), 43); // INLINE TEST EXECUTION
    /// ```
    pub fn one_more(n: i32) -> i32 {
    n + 1
    }
    ```

### **Safety by construction**

1. Pointer checked at compile time

    ```rust
    ///  THIS IS EXAMPLE OF BORROW CHECKER: REFERENCES CANNOT OUTLIVE THE DATA

    // every value has an owner, responsible for destructor (RAII).
    // compiler checks:

    // only ever one owner:
    // no double-free

    let x = Vec::new();
    let y = x;
    drop(x); // illegal, y is now owner

    // no pointers live past owner changes or drops:
    // no dangling pointers/use-after-free

    let mut x = vec![1, 2, 3];
    let first = &x[0];
    let y = x;
    println!(“{}”, *first); // illegal, first became invalid when x was moved
    ```

    ```rust
    /// POINTERS AND VARIABLES ARE IMMUTABLE BY DEFAULT
    let v = Vec::new();

    // this compiles just fine:
    println!(“len: {}”, v.len());

    // this will not compile; would need mutable access
    v.push(42);
    // ----------------------------------------------------------------------------
    /// FOR MUTABLE; USE mut KEYWORD EXPLICITLY

    let v = Vec::new();

    // explicitly declare need for mutable access
    fn push(v: &mut Vec<i32>) {
    v.push(42);
    }

    // this will not compile either:
    push(&mut v);
    ```

2. Thread safety embedded in type system

    ```rust
    use std::cell::Rc; // reference-counted, non atomic
    use std::sync::Arc; // Atomic reference-counted, atomic

    // this will not compile:
    let rc = Rc::new(“not thread safe”);
    std::thread::spawn(move || { println!(“I have an rc with: {}”, rc); });

    // this compiles fine:
    let arc = Arc::new(“thread safe”);
    std::thread::spawn(move || { println!(“I have an arc with: {}”, arc); });

    // this will also not compile:
    let mut v = Vec::new();
    std::thread::spawn(|| { v.push(42); });
    let _ = v.pop();
    ```

3. No hidden states

All enum values should be handled.

Enum can have union of types; unlike Java.

    ```rust
    // Any variable of type Option<T> must implement Some(T) and None
    enum Option<T> {
    Some(T),
    None,
    }

    // Any variable of type Result<T,E> must implement Ok(T) and Err
    enum Result<T, E> {
    Ok(T),
    Err(E),
    }

    // v is Option<&T>, not &T -- cannot use without checking for None
    let v = my_vec.find(|t| t >= 42);

    // n is Result<i32, ParseIntError> -- cannot use without checking for Err
    let n = “42”.parse();

    // ? suffix is “return Err if Err, otherwise unwrap Ok”
    let n = “42”.parse()?;
    ```

## 👎 Rust Drawbacks

## No Runtime

1. No runtime reflection

    i. **Java** uses reflection extensively for its runtime use-cases

    - Spring uses reflection for DI work
    - JUnit uses reflection to parse `@Test` and to get test methods and invoke it.

    ii. In **Rust,** reflection use-cases have to be done by the programmer herself.

2. No run-time added debugging

### Learning Curve

1. Borrow checker (handling references to data)
    1. Need to explicitly handle references. We need to make sure that the references do not OUTLIVE the data they refer to; if not the ***compiler*** throws an error.

## Ecosystem

1. Young
2. Small (But growing quickly)

## Windows

1. BAD SUPPORT FOR WINDOWS
