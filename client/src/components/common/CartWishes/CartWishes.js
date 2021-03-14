import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';

import styles from './CartWishes.module.scss';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Component extends React.Component {

  state = {
    wishes: this.props.wishes,
    smallWishes: this.setSmallWishes(),
    wishesToRender: this.setSmallWishes(),
    button: 'more'
  };

  setSmallWishes(){
    const small = this.props.wishes.substring(0,15) + ' ... ';
    return small;
  }

  toggleWishes(){
    if(this.state.button === 'more'){
      this.setState({
        wishesToRender: this.props.wishes,
        button: 'less',
      })
    } else if(this.state.button === 'less'){
      this.setState({
        wishesToRender: this.state.smallWishes,
        button: 'more',
      })
    }
  }
  render(){
    return(
      <div className={styles.root}>
        <div className={styles.header}>
          <p>Wishes:</p>
          <p onClick={() => {this.toggleWishes()}}>{this.state.button === 'more' ? (<ExpandMoreIcon />) : (<ExpandLessIcon />)}</p>
        </div>
        <p>{this.state.wishesToRender}</p>
      </div>
    );
  };
}


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  wishes: PropTypes.string,
};


export {
  Component as CartWishes,
  Component as CartWishesComponent,
};
