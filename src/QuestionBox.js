import React, { Component } from 'react';
import './QuestionBox.css'

class QuestionBox extends Component {
  constructor() {
    super();
    this.state = {
      questionText: '',
      answerText:''
    }
  }

  controlledQuestion = (event) => {
    console.log(event.target.value)
    this.setState({
      questionText : event.target.value
    })
  }

  controlledAnswer = (event) => {
    console.log(event.target.value)
    this.setState({
      answerText : event.target.value
    })
  }

  clearInput = () => {
    this.setState({
      questionText: '',
      answerText:''
    })
  }

  render() {
    
    return (
      <div className='questionbox-container'>
        <form >
          <input name="question" value={this.state.questionText} onChange={(event) => {this.controlledQuestion(event)}} />
          <input name="answer" value={this.state.answerText} onChange={(event) => {this.controlledAnswer(event)}} />
          <input type="submit" onClick={(event) => {this.props.addQuestion(event, this.props.index, this.state.questionText, this.state.answerText); this.clearInput()}} />
        </form>
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default QuestionBox;
