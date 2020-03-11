import React from 'react';
import { Redirect } from 'react-router';
import { routeList } from 'routes/routes';

const RedirectToHome = () => <Redirect to={routeList.home} />;

export default RedirectToHome;
