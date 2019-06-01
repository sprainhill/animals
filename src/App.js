import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import animals from './animalsData'

import AnimalList from './AnimalList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: animals
    }
  }

render() {

  return (
    <div className="App">
      <div>
        <AnimalList animals={this.state.animals} />
      </div>
   
    </div>
  );
}

}

export default App;
