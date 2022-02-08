import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
