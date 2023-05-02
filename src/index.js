import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./pages/app/App";

import "./style/rootstyle/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
