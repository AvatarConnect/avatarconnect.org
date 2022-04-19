import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Partners from '@site/src/components/Partners';

const IMAGES = [ // WE need 5 here for the keyframes
  'readyplayerme.png',
  'meebits.png',
  'crypto-avatars.png',
  'readyplayerme.png',
  'meebits.png',
]

function HomepageHeader() {
  const exampleImages = IMAGES.reduce((acc, image, index) => {
    const duration = 3
    const style = {
      '--animation-duration': `${duration * IMAGES.length}s`,
      '-webkit-animation-delay': `-${(index + 1) * duration + 0.5}s`
    }
    acc.push(<img src={`/examples/${image}`} className={styles.exampleImage} style={style} />)
    return acc
  }, [])

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <directives className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>Every <span className="text--gradient">Avatar Project</span></h1>
            <h1 className={styles.heading}>Any Game Engine</h1>
            <h1 className={styles.heading}>One <span className="text--gradient">SDK</span></h1>
            <p className={styles.tagline}>AvatarConnect is the bridge between avatar projects and metaverse experiences</p>
            <div className={styles.button}>
              <Link
                className="button button--primary button--lg"
                to="/docs">
                Get Started
              </Link>
            </div>
         </div>
          <div className={styles.illustrations}>
            <div className={styles.exampleImagesContainer}>{exampleImages}</div>
            <img src="/illustrations/hero.svg" className={styles.heroImage} />
          </div>
        </div>
      </directives>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="AvatarConnect"
      description="The bridge between avatar projects and metaverse experiences">
      <HomepageHeader />
      <main className={styles.partners}>
        <Partners nbElements={6} />  
      </main>
    </Layout>
  );
}
