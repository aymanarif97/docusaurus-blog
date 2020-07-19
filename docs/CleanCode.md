---
id: doc1
title: Clean Code
sidebar_label: Clean Code
---





# Books contents

**Part 1:** Principles, patterns and best practices of writing good clean code.

**Part 2:** Apply knowledge from part 1

**Part 3:** List of heuristics to detect smelly code learnt from part 1.



:::caution

Just knowing everything is not enough. Use them daily. Write and review lots of code. Review your own code by senior engineers and learn from your mistakes. Iteration is key.

:::


# Chapter 1 


## Rule of Thumb

1. Software Craftsmanship comes from knowledge and its implementation and application as code.

2. Read lots of code, make mistakes, argue and see the price for bad code.


3. Attitude: Be a professional. i.e. no matter what, maintain good and clean code.


4. Proxy of clean code
5. Maintainable/Testable code: Easy to modify and good tests. Easy to validate new changes

Produtivity of engineers: Can add new code easily

6. Readable

7. Crisp and clear: No suprises in what it does. Does SRP well.

8. Performant and scalable. [How would Ayman achieve this?]

 


## Chapter 2 - Naming


1. Naming should tell the intent:

Why it exists. what is does and how to use it.

Example: 

- :smile: : `employeePaymentInfo`
- :pensive: : `ePay`




2. Avoiding confusing name:

Using names that imply something

Example: 

- :smile: : `Unix`
- :pensive: : `testList` *(Even when it is not a java List)*



3. Choose clean name:

Say what you mean and mean what you say

Example: 

- `deleteItems` over `bustThemDown`

- `kill` over `whack`

4. Use good distinctions and DO NOT USE NUMBERS  at END

Example: 

- :smile: : `productIds` and `productDetails`
- :pensive: : `list1`
- :pensive: `produtInfo` and `productDetails` *(Same meaning and distinction os harder)*
 

5. Use pronouncable names

Example: 
 
- :smile: : `dateOfBirthInMonths`
- :pensive: : `dobymm` 


6. Use searchable names. 

::: caution 

DO NOT USE SINGLE CHARACTERS.

:::

7. DO NOT ENCODE TYPES IN NAMES

::: caution 

Generics could change the type of variables. 

:::

8. Avoid prefixes to names.

- `member_description` over`m_description`

- `ShapeFactory` and `ShapeFactoryImpl` over `IShapeFactory`

9. Class and functions


- Class names should be NOUNS. Eg: student, car, employee .etc.

- Function names should be VERBS. Eg: postPayment, deletePage

- Use names consistently
- Pick one concept and stick to it.
- Do not use same name for 2 different things.
- Use Domain specific name

Ecample: 

- For visitor pattern, use `accountVisitor`


- For queue pattern, use `jobQueue`


- For builder pattern, use `nameBuilder`


- Not too long name.

 

 

:::note

Food for thought: Use convention document during review or new hire training.

:::
