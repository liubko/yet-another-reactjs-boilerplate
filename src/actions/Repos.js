import EC from "EventConstants";
import api from "api/";

export default {
  fetch(query) {
    if (!query) {
      this.dispatch(EC.SERVER.FETCH_REPOS_SUCCESS, []);
      return [];
    }

    return api.repos
      .fetch(query)
      .then(data => {
        this.dispatch(EC.SERVER.FETCH_REPOS_SUCCESS, data.items);
        return data;
      });
  }
};
