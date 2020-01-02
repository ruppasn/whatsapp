import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import StatusItem from './statusItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
}));

export default ({status}) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
    {
      status && status.map(statusOne => {
        return <StatusItem status={statusOne} classes={classes} />
      })
    }
    </List>
  );
}