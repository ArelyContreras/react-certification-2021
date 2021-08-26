import React from 'react';
import ReactDOM from 'react-dom';

import AppProvider from './providers/AppProvider';
import App from './components/App';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
