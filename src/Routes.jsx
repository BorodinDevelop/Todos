import { Route, Switch } from 'react-router-dom'
import React from 'react'

import MainTodos from "./pages/MainTodos";
import AddTodos from "./pages/AddTodos";

const Routes = () => {
    return <Switch>
        <Route exact path="/" component={MainTodos} />
        <Route exact path="/AddTodos" component={AddTodos} />       
    </Switch>
}

export default Routes
