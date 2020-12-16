import React from 'react';
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Sidebar/>
    </Router>
  );
}

export default App;
