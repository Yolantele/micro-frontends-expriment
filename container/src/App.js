import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MicroFrontend from './MicroFrontend';

const { REACT_APP_BROWSE_HOST: browseHost } = process.env;

// fetch(`${process.env.REACT_APP_CONTENT_HOST}/restaurants.json`).then(res =>
//   res.json(),
// );

const Browse = ({ history }) => (
  <MicroFrontend history={history} host={browseHost} name="Browse" />
);

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Browse} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
