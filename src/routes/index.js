import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';

import Quiz from '../containers/quiz';
import styles from '../containers/quiz/quiz.scss';

const Routes = ({ history }) => (
  <Router history={history} >
    <Switch>
      <Route exact path="/" component={Quiz} />
      <Route render={() => <h1 className={styles.container}>Page not found</h1>} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
