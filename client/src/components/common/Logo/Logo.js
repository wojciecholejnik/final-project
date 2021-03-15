import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';


const Component = () => {

  const click = (text) => {
    const element = document.getElementById(text);
    element.classList.add(styles.clicked);
    setTimeout(()=>{element.classList.remove(styles.clicked)}, 100);
  }

  return(
    <Link onClick={() => {click('logo')}} to='/' className={styles.root}>
      <p id='logo' href='/'>BuBa <br/>Bakery</p>
    </Link >
  )
};


export {
  Component as Logo,
  Component as LogoComponent,
};
