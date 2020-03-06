/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './app.js';

const Main = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);