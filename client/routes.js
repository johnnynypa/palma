import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Banner from './components/banner';
import loginPage from './components/login/loginPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Banner}/>
    <Route path="/login" component={loginPage} />
  </Route>
)