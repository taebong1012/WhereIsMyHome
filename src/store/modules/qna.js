// import http from "@/util/http-common.js";
import axios from "axios";
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
      axios.get("http://193.97.128.216/question", {
        headers: {
          "Content-Type": "application/json",
          // Bearer: userStore.state.token,
          Bearer:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjIsInN1YiI6ImF1dGgtdXNlciIsImV4cCI6MTY2ODU4MzAzNX0.JoKQfDtGEJTOuet7q8po5sY9s-esKQNRooABUbE-eUA",
        },
      });
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
