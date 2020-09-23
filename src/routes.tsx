import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Games from "./pages/Games";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/games' exact component={Games}/>
        </Switch>
    )
};

export default Routes;
