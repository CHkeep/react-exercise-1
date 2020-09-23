import React, { Component } from 'react';
import './App.scss';
import Person from './components/Person';
import About from './components/About';
import Educations from './components/educa/Educations';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Person />
        <hr />
        <List name={'ABOUT ME'} />
        <About />
        <List name={'EDUCATION'} />
        <Educations />
      </main>
    );
  }
}

export default App;
