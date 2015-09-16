import fetch from "isomorphic-fetch";

export default {
  fetch(query) {
    let host = "https://api.github.com/search/repositories";

    return fetch(`${host}?q=${query}&sort=stars&order=desc`)
      .then(response => {
        return response.status === 200
          ? response.json()
          : Promise.reject();
      });
  }
};
