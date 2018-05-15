import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import QuestionBox from './QuestionBox'

// Question Component

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adminMode:true,
      columns: 4,
      rows: 4,
      questions: []
    }
  }

  render() {
    let QuestionBoxJSX = [];
    for (let i = 0; i < this.state.rows; i++) {
      for (let j = 0; j < this.state.columns; j++) {
        QuestionBoxJSX.push(<div className={'col-' + (12/this.state.columns) }> <QuestionBox id={`${j}-${i}`} /> </div>)
      }
    }

    return (
      <div className="App">
        
        <div className="row">
          {QuestionBoxJSX}
        </div>
      </div>
    );
  }
}

export default App;
