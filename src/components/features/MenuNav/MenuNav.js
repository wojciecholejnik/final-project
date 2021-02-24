import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton } from '../../common/MenuButton/MenuButton';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MenuNav.module.scss';

class Component extends React.Component {

  static propTypes = {
    match: PropTypes.node,
  }

  state = {
    activePage: '',
  }

  componentDidMount(){
    this.setState({activePage: '/'});
  }

  setActiveMenuButton = (name) => {
    this.setState({activePage: '/'+name});
    console.log(name);
  };

  render(){

    return (
      <div className={clsx(styles.root)}>
        <MenuButton name={'order'} />
        <MenuButton name={'about'} />
        <MenuButton name={'contact'} />
      </div>
    );
  }
}


// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MenuNav,
  // Container as MenuNav,
  Component as MenuNavComponent,
};
