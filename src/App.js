import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/index.css'
// import in my components below
import Nav from './Nav/navIndex'
import Poem from './Poems/poemIndex'
class App extends Component {
  render() {
    return (
      <div className="App">
 <Nav/>
 <Poem/>
      </div>
    );
  }
}

export default App;
