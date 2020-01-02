import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default ({ call, classes }) => {
    return <React.Fragment key={call.name}>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={call.image} src={call.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={call.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {call.lastMessage}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.floatRight}
                        color="textPrimary"
                      >
                        {call.dateTime}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
           
}