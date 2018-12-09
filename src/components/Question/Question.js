import React from 'react';
import PropTypes from 'prop-types';

import styles from './question.scss';

const Question = ({
  question,
  questionsIndex,
  total,
  setAnswer,
  options,
}) => (
  <div>
    <h3>Quiz {questionsIndex + 1} of {total}</h3>
    <p>{question.text}</p>
    <ol type="A" className={styles.answerList}>
      {question.options.length > 0 &&
        question.options.map(option => <li key={option} className={styles.answer}>{option}</li>)
      }
    </ol>
    <div className={styles.optionsWrapper}>
      {options.map((option, index) => (
        <a
          key={option}
          href="javascript: void(0);"
          className={styles.option}
          onClick={() => setAnswer(index)}
        >
          <span>{option}</span>
        </a>
      ))}
    </div>
  </div>
);

Question.propTypes = {
  total: PropTypes.number.isRequired,
  setAnswer: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  questionsIndex: PropTypes.number.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};

export default Question;
