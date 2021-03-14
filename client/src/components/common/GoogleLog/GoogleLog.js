import React from 'react';
import { MAIN_URL } from '../../../config';


import styles from './GoogleLog.module.scss';

const Component = () => (
  <div className={styles.root}>
    <a href={`${MAIN_URL}/auth/google`} >
      <i class="fab fa-google"></i>
      <div class={styles.container}>
        <p>Log in with Google</p>
      </div>
    </a>
  </div>
);

export {
  Component as GoogleLog,
  Component as GoogleLogComponent,
};
