import React, { Component } from 'react';
import './App.css';
import Scroll from './Scroll';
import Animate from './Animate';
import Extra from './Extra';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://static01.nyt.com/images/2017/08/01/science/29TB-PLATYPUS1/29TB-PLATYPUS1-articleLarge.jpg?quality=75&auto=webp&disable=upscale" className="App-logo" alt="logo" />
          <h1 className="App-title">World of the Platypus</h1>
        </header>
        <p className="App-intro">
          The platypus sometimes referred to as the duck-billed platypus, is a semiaquatic egg-laying mammal endemic to eastern Australia, including Tasmania. For further reading please view, <code>https://en.wikipedia.org/wiki/Platypus</code>.
        </p>
        <Scroll></Scroll>
        <Animate></Animate>
        <Extra></Extra>
      </div>
    );
  }
}
export default App;

