import React from 'react';

import { HashRouter, Route } from "react-router-dom";

import DecisionTreePage from './pages/decision-tree'
import TablePage from './pages/table'
import HomePage from './pages/home'
import ProcessPage from './pages/process'

import './App.scss';

function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path="/" component={HomePage} />
      <Route path="/decision-tree" component={DecisionTreePage} />
      <Route path="/table" component={TablePage} />
      <Route path="/process" component={ProcessPage} />
    </HashRouter>
  );
}

export default App;
