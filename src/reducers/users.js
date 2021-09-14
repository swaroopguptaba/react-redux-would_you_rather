import {
  LOAD_USERS,
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_QUESTION_TO_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };

    case ADD_ANSWER_TO_USER:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
}
