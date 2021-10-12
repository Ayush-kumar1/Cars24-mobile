import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CarProvider} from "./context/CarContext";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <CarProvider>
    <App />
    </CarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


