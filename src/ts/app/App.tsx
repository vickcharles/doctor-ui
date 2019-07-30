import React from 'react';

import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import HomePage from '../components/common/HomePage';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;
