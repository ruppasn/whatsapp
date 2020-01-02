import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CallsItem from './callItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
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

export default ({calls}) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
    {
      calls && calls.map(call => {
        return <CallsItem call={call} classes={classes} key={call.name} />
      })
    }
    </List>
  );
}