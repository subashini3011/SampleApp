import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Router from './router/route'
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Router} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
