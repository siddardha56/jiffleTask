import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './quiz.scss';
import fetchQuestions from './quizApi';
import {
  assignAnswer,
  setQuestionIndex,
} from './quizActions';
import Question from '../../components/Question/Question';
import Results from '../../components/Results/Results';

const options = ['A', 'B', 'C', 'D'];

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }
  render() {
    const {
      questions, questionsIndex, setAnswer, redirect,
    } = this.props;
    return (
      <div className={styles.container}>
        {questions.length > 0 && questionsIndex !== questions.length &&
          <Question
            question={questions[questionsIndex]}
            questionsIndex={questionsIndex}
            total={questions.length}
            setAnswer={setAnswer}
            options={options}
          />
        }
        {questions.length > 0 && questionsIndex === questions.length &&
          <Results
            data={questions}
            options={options}
            redirect={redirect}
          />
        }
      </div>
    );
  }
}

Quiz.propTypes = {
  questions: PropTypes.instanceOf(Array).isRequired,
  getQuestions: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  questionsIndex: PropTypes.number.isRequired,
};

const mapStateToProps = ({ QuizReducer }) => ({
  questions: QuizReducer.questions,
  questionsIndex: QuizReducer.questionsIndex,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getQuestions: fetchQuestions,
    setAnswer: assignAnswer,
    redirect: setQuestionIndex,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
