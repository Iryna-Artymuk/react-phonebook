import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// console.log(store.getState());
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="react-phonebook">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
