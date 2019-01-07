import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function isSearched(searchTerm) {
  return function(item) {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [
        {id: 1,
          name: 'abcd',
          age: 10},
        {id: 2,
          name: 'xyz',
          age: 20},
        {id:3,
          name: 'qwerty',
          age: 30},
        {id: 4,
          name: 'asdf',
          age: 40},
      ],
      todos: [],
      searchTerm: ''
    };

    this.deleteUser = this.deleteUser.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  deleteUser(id){
    let updatedUsers = this.state.users.filter(user => {
      return user.id != id;
    })
    this.setState(
      { users: updatedUsers}
    )
  }
  onSearchChange(event) {
    // alert('onChange')
    // console.log(event.target)
    this.setState({ searchTerm: event.target.value });
  }
  render() {

    const a = {name: 'rehan'};
    return (
      <div className="App">
        <h2>Welcome to the Road to learn React :</h2>
        <App2 data="taha"></App2>
        <App2 data={a.name}></App2>
        <Search
          value={this.state.searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        <Table
          list={this.state.users}
          pattern={this.state.searchTerm}
          onDismiss={this.onDismiss}
        />
        <Button onClick={()=> alert("button 1")} className="myClass" >
          click here 1
        </Button>
        <Button onClick={()=> alert("button 2")} className="myClass" >
          click here 2
        </Button>
        <Button onClick={()=> alert("button 3")} className="myClass" >
          click here 3
        </Button>
        {/* <form>
        <input type="text" onChange={this.onSearchChange} />
        </form>
        <br />
        {this.state.searchTerm}
        
        {this.state.users.filter(isSearched(this.state.searchTerm))
          .map(item => {
          return <div> {item.name} </div>
        })}
         */}
        
      </div>
    );
  }
}

class Search extends Component {
  render() {
  const { value, onChange } = this.props;
  return (
    <form>
      <div>{this.props.children}</div>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    </form>
    );
  }
}

class Table extends Component {
  render() {
  const { list, pattern, onDismiss } = this.props;
  return (
    <div>
      {list.filter(isSearched(pattern)).map(item =>
      <div key={item.id}>

      <span>{item.name}</span>
    
      <span>
      <button
      onClick={() => onDismiss(item.objectID)}
      type="button"
      >
      Dismiss
      </button>
      </span>
      </div>
      )}
    </div>
  );
  }
}

class App2 extends Component {
  
  render(){
    return (<div>
      hello {this.props.data}
    </div>)
  }
}
class Button extends Component {
  render() {
  const {
  onClick,
  className,
  children,
  } = this.props;
  return (
  <button
  onClick={onClick}
  className={className}
  type="button"
  >
  {children}
  </button>
  );
  }
}
export default App;


// var a = 1;
// var result = a ==2 ? 10 : 20;
