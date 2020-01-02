import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default ({ chat, classes }) => {
    return <React.Fragment key={chat.name}>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={chat.image} src={chat.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={chat.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {chat.lastMessage}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.floatRight}
                        color="textPrimary"
                      >
                        {chat.dateTime}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
           
}