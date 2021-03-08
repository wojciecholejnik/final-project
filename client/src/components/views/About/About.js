import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './About.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.innerContianer}>
      <div className={styles.articleContainer}>
        <div className={styles.imgContainer}>
          <img alt='logo-cake' className={styles.logoCake} src={require('../../../images/homepage/logo-cake.png')}></img>
        </div>
        <article>
          <p className={styles.text}>BuBa Bakery is a gourmet cupcake and specialty cake bakery serving the Greater Orlando area of Central Florida. All items are by special order and can be tailored to fit the client’s needs.</p>
        </article>
      </div>
      <div className={styles.articleContainer}>
        <div className={styles.imgContainer}>
          <img alt='logo-cake' className={styles.logoCake} src={require('../../../images/homepage/logo-cake.png')}></img>
        </div>
        <article>
          <p className={styles.text}>We strive to deliver unparalleled flavor experiences and unique statement confections! <br/> Our Mission is to provide a delicious cake experience that will have people dreaming about their next Jillycakes – big or small.</p>
        </article>
      </div>
    </div>
    <div className={styles.innerContianer}>
      <div className={styles.articleContainer}>
        <div className={clsx(styles.imgContainer)}>
          <img alt='logo-cake' className={styles.logoCake} src={require('../../../images/homepage/logo-cake.png')}></img>
        </div>
        <article>
          <table>
            <thead>
              <tr>
                <th>Open hours:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sun</td>
                <td>12pm-6pm</td>
              </tr>
              <tr>
                <td>Mon-Fri</td>
                <td>12pm-5pm</td>
              </tr>
              <tr>
                <td>Sat</td>
                <td>12pm-6pm</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <div className={styles.articleContainer}>
        <div className={clsx(styles.imgContainer)}>
          <img alt='logo-cake' className={styles.logoCake} src={require('../../../images/homepage/logo-cake.png')}></img>
        </div>
        <article>
          <p className={styles.text}>Call or write to us and find out more: <br/>Phone: <strong>123456789</strong><br/>Email: <strong>bubabakery@example.com</strong></p>
        </article>
      </div>
    </div>



    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as About,
  // Container as About,
  Component as AboutComponent,
};
