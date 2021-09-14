import {
  LOAD_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER_TO_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };

    case ADD_ANSWER_TO_QUESTION:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authedUser],
          },
        },
      };
    default:
      return state;
  }
}
