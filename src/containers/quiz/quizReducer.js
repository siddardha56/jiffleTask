import {
  GET_QUESTIONS,
  ASSIGN_ANSWER,
  SET_QUESTION_TO_ZERO,
} from './quizActions';

const initialState = {
  questions: [],
  questionsIndex: 0,
};

export default function QuizReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS: {
      return Object.assign({}, state, {
        questions: action.data,
      });
    }
    case ASSIGN_ANSWER: {
      const { questions, questionsIndex } = state;
      questions[questionsIndex].selected = action.answer;
      return Object.assign({}, state, {
        questions,
        questionsIndex: questionsIndex + 1,
      });
    }
    case SET_QUESTION_TO_ZERO: {
      return Object.assign({}, state, {
        questionsIndex: 0,
      });
    }
    default: return state;
  }
}
