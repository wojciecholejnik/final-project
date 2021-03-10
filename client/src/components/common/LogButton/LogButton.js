import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import { Avatar } from '@material-ui/core';

import styles from './LogButton.module.scss';


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
        <Badge  variant="dot" color={'error'} onClick={handleClick}>
          <Avatar >
          </Avatar>
        </Badge>
          {props.account.name ? (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem disabled onClick={handleClose}>Hi {props.account.name} !</MenuItem>
            <MenuItem onClick={() => {handleClose()}}>Log out</MenuItem>
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
            <MenuItem onClick={() => {handleClose()}}>Log in</MenuItem>
          </Menu>
        )}
    </div>
  );
}
