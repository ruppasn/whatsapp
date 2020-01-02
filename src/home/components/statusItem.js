import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default ({ status, classes }) => {
    return <React.Fragment key={status.name}>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={status.image} src={status.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={status.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.floatRight}
                        color="textPrimary"
                      >
                        {status.dateTime}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
           
}