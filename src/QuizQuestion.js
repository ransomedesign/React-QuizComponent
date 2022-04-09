import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

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
          <p>{q.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton button_text={q.answer_options[0]} />
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
