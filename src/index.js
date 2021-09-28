import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthProvider from './ContextApi/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
