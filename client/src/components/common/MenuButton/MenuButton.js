import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './MenuButton.module.scss';

const Component = ({name, to}) => {

  const click = (text) => {
    const element = document.getElementById(text);
    element.classList.add(styles.clicked);
    setTimeout(()=>{element.classList.remove(styles.clicked)}, 100);
  }

  return (
    <Link onClick={() => {click(name)}}  to={'/' + name} className={clsx(styles.root)}>
      <p id={name} >{name}</p>
    </Link>
  )
};

Component.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
};


export {
  Component as MenuButton,
  Component as MenuButtonComponent,
};
