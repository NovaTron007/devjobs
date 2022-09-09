import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css"
import "./App.css"
import App from './App';
// redux provider and our slice
import { Provider } from "react-redux";
import { store } from "./Store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
