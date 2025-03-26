import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [,, light] = ["boots", "tent", "headlamp", "map"];
console.log(light)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
);