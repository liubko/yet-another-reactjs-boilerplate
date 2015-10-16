import * as AT from "../constants/ActionTypes";
import api from "api/";


function receiveRepos(repos) {
  return {
    type: AT.FETCH_REPOS_SUCCESS,
    repos,
    receivedAt: Date.now()
  };
}


export function fetchRepos(query) {
  return dispatch => {
    if (!query) {
      dispatch(receiveRepos([]));
      return [];
    }

    return api.repos
      .fetch(query)
      .then(data => {
        dispatch(receiveRepos(data.items));
        return data;
      });
  };
}
