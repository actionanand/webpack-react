import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  

import './index.css';
import App from './App';


const app = (
  <BrowserRouter basename='webpack-react'>
    <App />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);