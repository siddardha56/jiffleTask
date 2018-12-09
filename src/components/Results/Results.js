import React from 'react';
import PropTypes from 'prop-types';

import styles from './results.scss';

const Results = ({ data, options, redirect }) => (
  <div>
    <h3>Result:</h3>
    <div>
      <div className={styles.row}>
        <div className={styles.column}><b>Question</b></div>
        <div className={styles.column}><b>Answer</b></div>
        <div className={styles.column}><b>Selected Answer</b></div>
      </div>
      {data.map((question, index) => (
        <div key={question.text} className={styles.row}>
          <div className={styles.column}>{index + 1}</div>
          <div className={styles.column}>{options[question.answer]}</div>
          <div className={styles.column}>{options[question.selected]}</div>
        </div>
      ))}
    </div>
    <p>
      Want to try again? &nbsp;&nbsp;&nbsp;
      <a href="javascript: void(0)" onClick={redirect}>Click here</a>
    </p>
  </div>
);

Results.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  redirect: PropTypes.func.isRequired,
};

export default Results;
