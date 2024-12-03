// src/index.js
import React from 'react';      // This is necessary if you're using JSX, but with React 17+ you can omit React if not required.
import ReactDOM from 'react-dom/client'; // Make sure ReactDOM is imported

import './index.css'; // Your Tailwind CSS file
import App from './App';
import { Provider } from 'react-redux';
import store from './utils/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>

    <App />
    </Provider>
    </>
  
  
);
