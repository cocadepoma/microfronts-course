import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in insolation
if (process.env.NODE_ENV === 'development') {
  // Mount the app
  const el = document.querySelector('#marketing-dev-app');
  if (el) {
    mount(el);
  }
}

// We are running through the container
// an we should export the mount function
export { mount };