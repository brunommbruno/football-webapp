import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var w = window.innerWidth;

ReactDOM.render(
  
  <React.StrictMode>
    {w < 700 ? 
    <App />
    :
    <h1 className="text-center">This App Is Currently Only Adapted For Mobile View</h1>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
