import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const c = 100;

class App extends Component {
  a = 1;
  constructor(){
    super();

    this.state = {
      counter : 2,
      users: [
        {id: 1,
          name: 'a',
        age: 10},
        {id: 2,
          name: 'b',
        age: 20},
        {id:3,
          name: 'c',
        age: 30},
        {id: 4,
          name: 'd',
        age: 40},
      ],
      todos: []
    };

    // setInterval(()=> this.setState(
    //   { counter: ++this.state.counter}
    // ), 1000)

    this.b = 30;


    // this.users = [
    //   {id: 1,
    //     name: 'a',
    //   age: 10},
    //   {id: 2,
    //     name: 'b',
    //   age: 20},
    //   {id:3,
    //     name: 'c',
    //   age: 30},
    //   {id: 4,
    //     name: 'd',
    //   age: 40},
    // ]

    this.incCounter = this.incCounter.bind(this);
    this.decCounter = this.decCounter.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  incCounter(){
    this.setState(
      { counter: ++this.state.counter}
    )
  }
  decCounter(){
    this.setState(
      { counter: --this.state.counter}
    )
  }
  deleteUser(id){
    let updatedUsers = this.state.users.filter(user => {
      return user.id != id;
    })
    this.setState(
      { users: updatedUsers}
    )
  }
  render() {
    let x = 10;
    let y = x + 20;
    let c = 50;
    let style = 'red'
    let style2 = 'blue'
    let arr = [1,2,3,4];
    return (
      <div className="App">
        <h2>Welcome to the Road to learn React : {y} {this.a} {this.b} {c} {window.c} 1+2 = {1+2} </h2>
        <div>
          {this.state.counter}
          <button onClick={() => this.incCounter()}>counter inc</button>
          <button onClick={() => this.decCounter()}>counter dec</button>
          {/* { true? 'a' : 'b' } */}
          {/* { [1,2,3,4].map(function(item, index){
            return <div style={{color: index%2 ? style: style2}} >a</div>;
          }) } */}
          {/* <ul>
            { [1,2,3,4].map(function(item, index){
              return <li>{item}</li>;
            }) }
          </ul> */}
          {/* <ul>
            { arr.map(function(item, index){
              return <li>{item}</li>;
            }) }
          </ul> */}
          
            { this.state.users.map((item, index) => {
              return <div className='row' key={item.id}>
                <span className='column'>{item.name}</span>
                <span className='column'>{item.age}</span>
                <button onClick={() => this.deleteUser(item.id)}>delete</button>
              </div>;
            }) }

          
        </div>
      </div>
    );
  }
}

export default App;


// var a = 1;
// var result = a ==2 ? 10 : 20;