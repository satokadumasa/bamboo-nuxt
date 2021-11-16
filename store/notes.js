export const state = () => ({
  notes: {},
});
export const mutations = {
  SET_NOTES(state, payLoad) {
    state.notes = payLoad
  }
};
export const getters = {
  note_list: (state) => {
    return state.notes;
  }
};
export const actions = {
  /**
   *
   * @param {*} param0
   * @param {*} params
   */
   notelistAsync({ commit }, params) {
    if (_.isUndefined(params.params.page)) {
      params.params.page = 1;
    }
    let searchData = "";
    _.each(params.params, (value, key) => {
      if (key != "page" && value != undefined && value != "") {
        searchData += `&${key}=${value}`;
      }
    });
    return this.$axios
      .$get("/notes?page=" + params.params.page + searchData)
      .then((response) => {
        commit("SET_NOTES", response.data);
        return response;
      });
  },
};