import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Monitor from './components/Monitor';
import Builder from './components/Builder';
import Feeds from './components/Feeds';
import Account from './components/Account';
import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Monitor} />
    <Route path="/monitor" component={Monitor} />
    <Route path="/monitor/:id" component={Account} />
    <Route path="/builder" component={Builder} />
    <Route path="/feeds" component={Feeds} />
    <Route path="*" component={NotFound} />
  </Route>
);