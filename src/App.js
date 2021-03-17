import React, {Fragment} from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Landing} />
      </div>
    </Router>
  );
}

export default App;
