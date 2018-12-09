export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ASSIGN_ANSWER = 'ASSIGN_ANSWER';
export const SET_QUESTION_TO_ZERO = 'SET_QUESTION_TO_ZERO';

export const getQuestions = data => ({
  type: GET_QUESTIONS,
  data,
});

export const assignAnswer = answer => ({
  type: ASSIGN_ANSWER,
  answer,
});

export const setQuestionIndex = () => ({
  type: SET_QUESTION_TO_ZERO,
});
