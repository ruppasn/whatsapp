import React from 'react';
import { Route, Switch } from "react-router-dom";
import Chats from './home/home';

const routes = () => (
    <Switch>
        <Route component={Chats} />
        <Route path="/chats" component={Chats} />
    </Switch>
)

export default routes;