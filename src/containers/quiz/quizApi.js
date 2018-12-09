import axios from 'axios';

import { getQuestions } from './quizActions';

const headers = {
  'Content-Type': 'application/json',
};

const url = 'https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json';
const fetchQuestions = () => dispatch => axios({
  url,
  headers,
  method: 'get',
}).then(res => dispatch(getQuestions(res.data)));

export default fetchQuestions;
