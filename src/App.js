import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './css/uikit.min.css'
import './index.css';
import './script.js'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
