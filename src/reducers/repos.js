import * as AT from "../constants/ActionTypes";

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case AT.FETCH_REPOS_SUCCESS:
      return action.repos;
    default:
      return state;
  }
}
