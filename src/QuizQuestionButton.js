import React, { Component } from "react";

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button className="QuizQuestionButton">{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
