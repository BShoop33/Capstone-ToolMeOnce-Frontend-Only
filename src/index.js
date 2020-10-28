import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { ToolMeOnce } from "./ToolMeOnce.js"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToolMeOnce />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);