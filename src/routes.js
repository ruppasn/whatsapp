import React from 'react';
import { Route, Switch } from "react-router-dom";
import Chats from './home/homePage';

const Routes = () => (
    <Switch>
        <Route path="/" component={Chats} />
        <Route path="/chats" component={Chats} />
        <Route path="/status" component={Chats} />
        <Route path="/calls" component={Chats} />
    </Switch>
)

export default Routes;