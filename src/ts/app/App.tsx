import React from 'react';

import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import HomePage from '../components/common/HomePage/HomePage';
import Registration from '../components/Registration/Registration';
import Header from '../components/common/Header';
import { ProfileBuilder } from '../components/ProfileBuilder/ProfileBuilder';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/crear-cuenta" component={Registration} />
      <Route path="/profile-builder" component={ProfileBuilder} />
    </Router>
  );
}

export default App;
