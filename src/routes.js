import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './home/homePage';

const Routes = () => (
    <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/:activeTab" component={HomePage} />
    </Switch>
)

export default Routes;