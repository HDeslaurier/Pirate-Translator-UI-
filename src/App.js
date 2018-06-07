import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js' ;
import InputForm from './InputForm.js' ;

class App extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            translatedText: '' ,
            inputedText: ' ',
        }
    }

    getInputText = (dataFromChild) => {
        console.log('callaback function: '+dataFromChild) ;
        this.setState({inputedText:dataFromChild}) ;
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <InputForm returnText = {this.getInputText}/>
            <div>
                <Button inputText = {this.state.inputedText}/>
            </div>
        </p>
      </div>
    );
  }
}

export default App;
