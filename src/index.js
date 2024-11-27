// src/index.js
import React from 'react';      // This is necessary if you're using JSX, but with React 17+ you can omit React if not required.
import ReactDOM from 'react-dom'; // Make sure ReactDOM is imported

import './index.css'; // Your Tailwind CSS file
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
