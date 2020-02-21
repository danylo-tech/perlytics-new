import React from 'react';
import { hot } from 'react-hot-loader';
import AppRouter from './router/AppRouter';

const App = () => {
  return <AppRouter />;
};

export default hot(module)(App);
