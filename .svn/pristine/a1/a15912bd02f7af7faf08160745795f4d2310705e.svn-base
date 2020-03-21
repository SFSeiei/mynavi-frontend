import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from 'utils/history';
import { RouteChildrenProps } from 'react-router';

const RouterContext = React.createContext({} as RouteChildrenProps);

const RouterProvider: React.FC = ({ children }) => (
  <Router history={history}>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </Router>
);

export const useRouter = () => {
  const context = React.useContext(RouterContext);

  if (context === undefined) {
    throw new Error(`useUser must be used within a RouterProvider`);
  }

  return context;
};

export default RouterProvider;
