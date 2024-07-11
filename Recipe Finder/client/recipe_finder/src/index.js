// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App'; // Adjust the path if necessary
import './index.css'; // Optional, if you have any global styles

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
