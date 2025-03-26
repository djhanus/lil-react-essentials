import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function AppTwo() {
  return <h1>Second App Header</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <AppTwo />
  </>
);