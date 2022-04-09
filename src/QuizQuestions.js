import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     quiz_position: 1,
    // };
  }

  render() {
    const { quiz_question: q } = this.props;

    return (
      <main>
        <section>
          <p>{this.props.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{q.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
