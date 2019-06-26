import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name:'Sudhi'
  };
  changeName =(newName) =>{
    this.setState({
        name:newName
    })
  };

  changeNameFromInput =(event) =>{
    this.setState({
        name:event.target.value
    })
  };
  render() {
    return (
      <div className="App">
        <br></br>
        <button onClick={()=>this.changeName('Rintu')}>Change using anonymous</button>
        <button onClick={this.changeName.bind(this,'Jewel')}>Change using bind</button>
        <br></br>
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name}></input>
        <br></br>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
