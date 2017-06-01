import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import AdminPage from './components/admin/AdminPage';
import ProtectedPage from './components/protected/ProtectedPage';
import AboutPage from './components/about/AboutPage';
import LoginPage from './components/login/LoginPage'; //eslint-disable-line import/no-named-as-default
import RegistrationPage from './components/registration/RegistrationPage'; //eslint-disable-line import/no-named-as-default
import { requireAdmin } from './actions/authActions';
import RequestsPage from './components/requests/RequestsPage'; //eslint-disable-line import/no-named-as-default
import NewRequestPage from './components/newRequest/NewRequestPage'; //eslint-disable-line import/no-named-as-default


export default function Routes(store) {


  const checkAdmin = (nextState, replace, callback) => {
    store.dispatch(requireAdmin(nextState, replace, callback));
  };

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="layout" component={Layout} />
      <Route path="requests" component={RequestsPage} />
      <Route path="request" component={NewRequestPage} />
    </Route>
  );
}
