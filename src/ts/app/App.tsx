import React from 'react';

import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import HomePage from '../components/common/HomePage/HomePage';
import Header from '../components/common/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;
