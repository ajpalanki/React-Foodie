import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from './App';
import Recipe from './components/nested/Recipe';
import Nutrition from './components/nested/Nutrition';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/nutrition/:id" component={Nutrition} />
        </Switch>
    </BrowserRouter>
)

export default Router;