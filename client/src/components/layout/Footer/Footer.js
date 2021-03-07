import React from 'react';
import styles from './Footer.module.scss';


const SideBar = () => (
  <div className={styles.root}>
    <a href='http://www.facebook.com'><i className="fab fa-facebook-square"></i></a>
    <a href='http://www.instagram.com'><i className="fab fa-instagram"></i></a>
    <a href='http://www.twitter.com'><i className="fab fa-twitter"></i></a>
  </div>
);

export {
  SideBar as Footer,
  SideBar as FooterComponent,
};
