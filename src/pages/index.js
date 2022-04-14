import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Partners from '@site/src/components/Partners';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <directives className="container">
        <h1 className={styles.heading}>One SDK</h1>
        <h1 className={styles.heading}>Every Avatar Project</h1>
        <h1 className={styles.heading}>Any Game Engine</h1>
        <p className={styles.tagline}>AvatarConnect is the bridge between avatar projects and metaverse games</p>
        <div className={styles.button}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </directives>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="AvatarConnect"
      description="The bridge between avatar projects and metaverse games">
      <HomepageHeader />
      <main className={styles.partners}>
        <Partners nbElements={6} />  
      </main>
    </Layout>
  );
}
