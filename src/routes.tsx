import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Games from "./pages/Games";
import FormGame from "./pages/Games/Form";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/games' exact component={Games}/>
            <Route path='/games_cadastro' exact component={FormGame}/>
        </Switch>
    )
};

export default Routes;
