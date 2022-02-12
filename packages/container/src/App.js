import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const logOut = () => {
    setIsSignedIn(false);
  };

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={logOut} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/" component={MarketingLazy} exact={true} />
              <Route path="/pricing" component={MarketingLazy} />
              <Route path="/auth" component={AuthLazy}>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
