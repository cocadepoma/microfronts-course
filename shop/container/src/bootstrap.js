import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartsMount } from 'cart/CartShow';


console.log('Container!');

const el = document.getElementById('my-products');
productsMount(el);

const el2 = document.getElementById('my-cart');
cartsMount(el2);
