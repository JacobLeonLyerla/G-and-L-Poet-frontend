import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    //wrapping App component with the Router
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
  