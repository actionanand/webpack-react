import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  

import './index.css';
import App from './App';

let baseName = 'webpack-react';

if (process.env.NODE_ENV === 'development'){
  baseName = '';
}

const app = (
  <BrowserRouter basename={baseName} >
    <App />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);