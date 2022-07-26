import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/newsapp" key="home" element={<News country="in" category="general"/>}/>
            <Route exact path="/general" key="general" element={<News country="in" category="general"/>}/>
            <Route exact path="/business" key="business" element={<News country="in" category="business"/>}/>
            <Route exact path="/entertainment" key="entertainment" element={<News country="in" category="entertainment"/>}/>
            <Route exact path="/sports" key="sports" element={<News country="in" category="sports"/>}/>
            <Route exact path="/technology" key="technology" element={<News country="in" category="technology"/>}/>
            <Route exact path="/health" key="health" element={<News country="in" category="health"/>}/>
            <Route exact path="/science" key="science" element={<News country="in" category="science"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
