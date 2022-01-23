import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITIVELTY has an element with the id 'dev-products'
// We want to inmediatly render our app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products');

  // Assuming or container does not have an element
  // with id 'dev-products' ...
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}


// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that the element with the id 'dev-products' exists
// WE DO NOT WANT to try inmidiately render the app

export { mount };