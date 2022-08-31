import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css"
import "./App.css"
import App from './App';
// redux provider and our slice
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { jobsSlice } from "./Features/Api/jobsSlice";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={jobsSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
