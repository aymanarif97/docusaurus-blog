import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// get our fontawesome imports
import { faHome, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialFollow from './SocialFollow';

const features = [
  {
    title: <>Java</>,
    square: false,
    imageUrl: 'https://w.wallhaven.cc/full/96/wallhaven-96gywx.png',
    description: (
      <>
        Java is NOT DEAD!
      </>
    ),
  },
  {
    title: <>Golang</>,
    imageUrl: 'https://static.javatpoint.com/go/images/go-tutorial.jpg',
    square: true,
    description: (
      <>
        Golang. Google's posterchild. Simple, elegant, effective. 
        That's how yo GO about doing backend systems.
      </>
    ),
  },
  {
    title: <>Node JS Blog</>,
    square: true,
    imageUrl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
    description: (
      <>
        Stay tuned for NodeJS blogs. All front-end engineers, look away!
      </>
    ),
  },
];

function Feature({imageUrl, title, description, square}) {
  const imgUrl = useBaseUrl(imageUrl);
  

  if(square){
    return (
      <div className={classnames('col col--4', styles.feature)}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImageSquare} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  else {
    return (
      <div className={classnames('col col--4', styles.feature)}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImageRectangle} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

  
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Find Docs!
            </Link>
            </div>
<SocialFollow/>

        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
