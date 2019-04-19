import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill'; // polyfill features not available in older browsers (eg promise)
import App from './App';
import './style.css';

ReactDOM.render(<App />, document.getElementById('app'));
