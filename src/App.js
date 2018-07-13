import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/index.css'
import{Row,Col} from 'reactstrap';
// import in my components below
import Nav from './Nav/navIndex'
import Poem from './Poems/poemIndex'
import SideBar from './Sidebar/sidebarIndex';
import Profile from './Profile/profileIndex';
class App extends Component {
  render() {
    return (
      <div className="App">
 <Nav/>
 <Row>
   <Route exact path ='/'
  render ={props =><SideBar/>}
  />
   <Route exact path ='/'
  render ={props =><Poem/>}
  />
  <Route exact path = "/profile"
  render ={props=><Profile/>}
  />
 </Row>
      </div>
    );
  }
}

export default App;
