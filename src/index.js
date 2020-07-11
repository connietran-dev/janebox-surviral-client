import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App';
import './style.scss'

ReactDOM.render(
  <Router basename='/'>
    <App />
  </Router>,
  document.getElementById('root')
);
