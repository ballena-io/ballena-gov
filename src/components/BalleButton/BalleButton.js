import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const BalleButton = ({ children, onClick, isOutlined, ...rest }) => {
  const classes = useStyles();

  const styles = [classes.balleButton, isOutlined ? classes.balleButtonOutlined : classes.balleButtonContained];

  return (
    <Button className={styles} onClick={onClick}>
      {children}
    </Button>
  );
};

export default BalleButton;
