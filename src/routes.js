import React from 'react';
import {Route, IndexRedirect, IndexRoute} from 'react-router';
import App from './components/App';

import Monitor from './components/Monitor';
import IndexMonitor from './components/Monitor/IndexMonitor';
import Account from './components/Monitor/Account';
import AccountEdit from './components/Monitor/AccountEdit';

import Templates from './components/Templates';
import IndexTemplates from './components/Templates/IndexTemplates';
import TemplateForm from './components/Templates/TemplateForm';

import Feeds from './components/Feeds';
import NotFound from './components/NotFound';

import Login from './components/Login';

export default (
  <div>
    <Route path="/login" component={Login} />
    <Route path="/" component={App}>
      <IndexRedirect to="/monitor"/>
      <Route path="/monitor" component={Monitor}>
        <IndexRoute component={IndexMonitor}/>
        <Route path=":id" component={Account}/>
        <Route path=":id/edit" component={AccountEdit}/>
      </Route>
      <Route path="/templates" component={Templates}>
        <IndexRoute component={IndexTemplates}/>
        <Route path=":id/edit" component={TemplateForm}/>
        <Route path="new" component={TemplateForm}/>
      </Route>
      <Route path="/feeds" component={Feeds}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </div>
);