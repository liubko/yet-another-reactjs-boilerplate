import Fluxxor from "fluxxor";
import EC from "EventConstants";

let ReposStore = Fluxxor.createStore({
  init() {
    this._repos = [];
  },

  initialize() {
    this.init();

    this.bindActions(
      EC.SERVER.FETCH_REPOS_SUCCESS, this.handleReceiveReposSuccess
    );
  },

  /*==========  Getters  ==========*/
  getRepos() {
    return JSON.parse(JSON.stringify(this._repos));
  },

  /*==========  handlers  ==========*/
  handleReceiveReposSuccess(repos) {
    this._repos = repos;
    this.emit("change");
  },
});

export default ReposStore;
