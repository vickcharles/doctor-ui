import React from 'react';

import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import HomePage from '../components/common/HomePage/HomePage';
import Registration from '../components/Registration/Registration';
import Header from '../components/common/Header';
import Dashboard from '../components/Dasboard/Dashboard';
import { ProfileBuilder } from '../components/ProfileBuilder/ProfileBuilder';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/crear-cuenta" component={Registration} />
      <Route path="/profile-builder" component={ProfileBuilder} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
