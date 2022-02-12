import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      console.log(nextPathName);
      if (nextPathName !== history.location.pathname) {
        history.push(nextPathName);
      }
    }
  };
};

// If we are in development and in insolation
if (process.env.NODE_ENV === 'development') {
  // Mount the app
  const el = document.querySelector('#auth-dev-app');
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through the container
// an we should export the mount function
export { mount };