import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store'; // Or wherever your store is

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
