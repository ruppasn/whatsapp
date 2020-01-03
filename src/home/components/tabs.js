import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';


const Chats = lazy(() => import('./chats'));
const Status = lazy(() => import('./status'));
const Calls = lazy(() => import('./calls'));
const renderLoader = () => <CircularProgress color="secondary"/>;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  highlight: {
    backgroundColor: 'green',
  }
}));

export default function FullWidthTabs({ chats, status, calls, activeTabName, history }) {
  const tabs = ['chats', 'status', 'calls']
  const activeTabIndex = tabs.indexOf(activeTabName);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(activeTabIndex);
  const handleChange = (event, newValue) => {
    console.log('change in tab', event);
    setValue(newValue);
    history.push(tabs[newValue])
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={activeTabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
        {tabs.map((tab, index) => <Tab data-route={tab} key={tab} label={tab} {...a11yProps(index)}/>)}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Suspense fallback={renderLoader()}>
          <Chats chats={chats} />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Suspense fallback={renderLoader()}>
          <Status status={status} />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Suspense fallback={renderLoader()}>
          <Calls calls={calls} />
        </Suspense>
      </TabPanel>
    </div>
  );
}
