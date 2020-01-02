import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatItem from './chatItem'

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

export default ({chats}) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
    {
      chats && chats.map(chat => {
        return <ChatItem chat={chat} classes={classes} key={chat.name}/>
      })
    }
    </List>
  );
}