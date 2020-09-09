import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const defaultHistory = createBrowserHistory();

const App = ({ history }) => {
  // const host = process.env.REACT_APP_CONTENT_HOST;
  let hist = history || defaultHistory;
  console.log('passed or default history is ---', hist);

  return (
    <Router history={hist}>
      <div style={{ margin: 100 }}>This is a seperate Browse App </div>
    </Router>
  );
};

export default App;
