import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../src/view/home'
import NavAbout from '../src/view/navabout';
import NavSkills from '../src/view/navskills';
import NavExperience from './view/navexperience';

function App() {
  return (
    <main>
      <Router  basename="/portfolio">
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={NavAbout} />
            <Route path="/skills" component={NavSkills} />
            <Route path="/experience" component={NavExperience} />
        </div>
      </Router>
       
    </main>
  );
}

export default App;
