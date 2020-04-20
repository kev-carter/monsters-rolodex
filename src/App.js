import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import {CardSet} from './components/card-set/card-set.component';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      string: 'kev',
      string2: 'Kevin',
      monsters:[],
      searchField: '',
      cardSet: 2
    }

    this.handleClick2 = this.handleClick1.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => 
      response.json())
      .then(users => this.setState({ monsters : users }))
      .catch(error => console.log('wrong URL'))
      
  }

  // arrow functions bind 'this' automatically (lexical scoping)
  // instead of doing 'this.handleSearch = this.handleSearch.bind(this)' in the constructor
  // typically should used arrow functions to bind in React on any class methods that aren't already part of React
  handleSearch = (e) => {
    this.setState({searchField : e.target.value})
  }

  handleCardTypeSubmit = (e) => {
    e.preventDefault(e);
    const target = e.target;
    this.setState({cardSet : target.value})
    //console.log(target.value);
  }

//Simple binding exercise
handleClick1() {
  console.log('button 1 clicked:' + this);
}
handleClick3 = (e) => {
  console.log('button 3 clicked:' + this);
}

  render() {
    //destructuring (by value)
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search' 
          handleChange={this.handleSearch}/>

        <CardSet cardSetValue={ this.state.cardSet } handleChangeType = { this.handleCardTypeSubmit }/>
        <br/>

        <CardList monsters={filteredMonsters} cardSet={this.state.cardSet}/>
{/*
        <br/>
        <button onClick={this.handleClick1()}>Click 1</button>
        <button onClick={this.handleClick1}>Click 2</button>
        <button onClick={this.handleClick2}>Click 3</button>
        <button onClick={this.handleClick3}>Click 4</button>
*/}

      </div>
    );  
  }
}
export default App;
