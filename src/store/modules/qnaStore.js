// import http from "@/util/http-common.js";

// import userStore from "./user";
const qnaStore = {
  namespaced: true,
  state: {
    qnaList: [],
  },

  getters: {
    getQnaList(context) {
      return context.qnaList;
    },
  },

  actions: {
    allQna({ commit }) {
      // http.get("/question").then((response) => {
      //   commit("SET_QNA_LIST", response.data);
      // });
    },
  },

  mutations: {
    SET_QNA_LIST(state, payload) {
      state.qnaList = payload;
    },
  },
};

export default qnaStore;
