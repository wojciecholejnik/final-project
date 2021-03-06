import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import { MAIN_URL } from '../../../config';

import styles from './LogButton.module.scss';
import { GoogleLog } from '../GoogleLog/GoogleLog';


export function LogButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.root}>
      <Avatar
        src={props.account.img}
        onClick={handleClick}
      >
      </Avatar>

      {props.account.name ? (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem disabled onClick={handleClose}>Hi {props.account.name} !</MenuItem>
        <MenuItem onClick={() => {handleClose()}}><a style={{textDecoration: 'none', color: 'black'}} href={`${MAIN_URL}/auth/logout`}>Log out</a></MenuItem>
      </Menu>
    ) : (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem disabled onClick={handleClose}>Please:</MenuItem>
        <MenuItem
          onClick={() => {handleClose()}}
        >
          {/* <a style={{textDecoration: 'none', color: 'black'}} href={`${MAIN_URL}/auth/google`} >Log in</a> */}
          <GoogleLog />
        </MenuItem>
      </Menu>
    )}
    </div>
  );
}
