import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import QuestionBox from './QuestionBox'

// Question Component

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: [{question:'',answer:''},{question:'',answer:''},{question:'',answer:''},{question:'',answer:''},
             {question:'',answer:''},{question:'',answer:''},{question:'',answer:''},{question:'',answer:''},
             {question:'',answer:''},{question:'',answer:''},{question:'',answer:''},{question:'',answer:''},
             {question:'',answer:''},{question:'',answer:''},{question:'',answer:''},{question:'',answer:''}]
    }
  }

  addQuestion = (event, id, question, answer) => {
    event.preventDefault();
    console.log(`addQuestion running with id: ${id}, question: ${question} and answer: ${answer}`);
    let updatedGrid = Array.from(this.state.grid);
    updatedGrid[id] = {
      question: question,
      answer: answer
    }
    this.setState({
      grid: updatedGrid
    })
  }

  render() {
    let QuestionBoxJSX = [];
    for (let i = 0; i < this.state.grid.length; i++) {
      QuestionBoxJSX.push(<QuestionBox addQuestion={this.addQuestion} question={this.state.grid[i].question} index={i} key={i} />)
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
