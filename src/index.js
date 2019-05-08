import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill'; // polyfill features not available in older browsers (eg promise)
import App from './App';
import DefaultErrorBoundary from './components/DefaultErrorBoundary';
import './style.css';
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
