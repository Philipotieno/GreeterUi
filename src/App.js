import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { greeterContract } from './EthereumSetup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
    };
  }
  componentWillMount() {
    let data = greeterContract.greet();
    this.setState({ greeting: String(data) });
  }
  render() {
    return (
      <div>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>"{this.state.greeting}"</h2>
        </div>
      </div>
    );
  }
}

export default App;
