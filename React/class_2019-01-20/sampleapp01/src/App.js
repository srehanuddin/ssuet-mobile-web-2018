import React, { Component } from 'react';
import { Route } from "react-router-dom";


import logo from './logo.svg';

import Header from './components/header/Header';
import SideMenu from './components/side-menu/SideMenu';
import Home from './components/home/Home';
import About from './components/about/About';

class App extends Component {
  constructor(props){
    super(props);

   
  }
  render() {
    return (
      <div>
        <Header></Header>        
        
        <div className="container">
          <div className="row">
            <SideMenu></SideMenu>
            {/* <Home></Home> */}

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />

          </div>
        </div>
      </div>
    );
  }
}
export default App;
