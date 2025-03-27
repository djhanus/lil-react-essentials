import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App login="djhanus"/>
  </>
);

// ReactDOM.render(
//   <App login="djhanus"/>,
//   document.getElementById('root')
// );