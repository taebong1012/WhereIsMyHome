import http from "@/util/http-common.js";

const userStore = {
  namespaced: true,
  state: {
    token: "",
  },

  getters: {
    getToken(context) {
      return context.token;
    },
  },

  actions: {
    login({ commit }, user) {
      let param = {
        id: user.id,
        pw: user.pw,
      };
      http.post("/user/login", param).then((response) => {
        commit("SET_TOKEN", response.data.access_token);
      });
      return true;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
};

export default userStore;
