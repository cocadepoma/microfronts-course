import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in development and in insolation
if (process.env.NODE_ENV === 'development') {
  // Mount the app
  const el = document.querySelector('#dashboard-dev-app');
  if (el) {
    mount(el);
  }
}

// We are running through the container
// an we should export the mount function
export { mount };