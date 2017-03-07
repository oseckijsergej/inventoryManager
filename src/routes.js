import React from 'react';
import {Route, IndexRedirect, IndexRoute} from 'react-router';
import App from './components/App';
import Monitor from './components/Monitor';
import IndexMonitor from './components/Monitor/IndexMonitor';
import Builder from './components/Builder';
import Feeds from './components/Feeds';
import Account from './components/Monitor/Account';
import AccountEdit from './components/Monitor/AccountEdit';
import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/monitor"/>
    <Route path="/monitor" component={Monitor}>
      <IndexRoute component={IndexMonitor}/>
      <Route path=":id" component={Account}/>
      <Route path=":id/edit" component={AccountEdit}/>
    </Route>
    <Route path="/builder" component={Builder}/>
    <Route path="/feeds" component={Feeds}/>
    <Route path="*" component={NotFound}/>
  </Route>
);