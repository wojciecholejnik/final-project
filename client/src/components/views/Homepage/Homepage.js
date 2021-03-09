import React from 'react';
import clsx from 'clsx';


import styles from './Homepage.module.scss';

const Component = () => (
  <div className={clsx(styles.root)}>
    <img alt='logo-cake' className={styles.logoCake} src={require('../../../images/homepage/logo-cake.png')}></img>
    <div className={styles.text}>
      <h3 className={styles.title}>Every occasion deserves a cake !</h3>
    </div>
  </div>
);


export {
  Component as Homepage,
  Component as HomepageComponent,
};
