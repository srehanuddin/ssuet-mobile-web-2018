import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = ({ match }) => {
  console.log('match',match);
  return (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
  )};
const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);

export default App;

/*
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Users1 = () => <h2>Users 1</h2>;

const Index1 = ({name}) => <h2>Home {name}</h2>;

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
        <Index1 name="rehan"></Index1>
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
*/