/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;*/

/*
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Users1 = () => <h2>Users 1</h2>;

const Menu = () => (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
);

const Content = () => (
  <div>
    <Route path="/" exact component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <Menu></Menu>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React <Route path="/users/" component={Users1} />
          </a>
        </header>

        {<Content></Content>}
      </div>
      </Router>
    );
  }
}

export default App;


//export default AppRouter;
*/
