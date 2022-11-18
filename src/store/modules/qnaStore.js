// import http from "@/util/http-common.js";

// import userStore from "./user";
import router from "@/router";
import { getQnaList, getQnaOne, getQnaAnswerList, createQuestion, searchQnaList } from "@/api/qna";

const qnaStore = {
  namespaced: true,
  state: {
    qnaList: [],
    qnaObject: Object,
    qnaAnswerObject: Object,
  },

  getters: {
    getQnaListObserver(context) {
      return context.qnaList;
    },
    getQnaObjectObserver(context) {
      return context.qnaObject;
    },
    getQnaAnswerObjectObserver(context) {
      return context.qnaAnswerObject;
    },
  },

  actions: {
    allQna({ commit }) {
      commit("SET_QNA_LIST", []);
      getQnaList(({ data }) => {
        commit("SET_QNA_LIST", data);
      });
    },

    getQnaOne({ commit }, uid) {
      commit("SET_QNA_OBJECT", null);

      getQnaOne(uid, ({ data }) => {
        commit("SET_QNA_OBJECT", data);
      });
    },

    getQnaAnswerList({ commit }, uid) {
      commit("SET_QNA_ANSWER_OBJECT", []);
      getQnaAnswerList(uid, ({ data }) => {
        commit("SET_QNA_ANSWER_OBJECT", data);
      });
    },

    createQuestion({ commit }, params) {
      console.log(JSON.stringify(params));
      createQuestion(params, ({ data }) => {
        router.push({
          name: "qnalist",
        });
      });
    },

    searchQna({ commit }, word) {
      commit("SET_QNA_LIST", []);
      searchQnaList(word, ({ data }) => {
        commit("SET_QNA_LIST", data);
      });
    },
  },

  mutations: {
    SET_QNA_LIST(state, payload) {
      state.qnaList = payload;
    },

    SET_QNA_OBJECT(state, payload) {
      state.qnaObject = payload;
    },

    SET_QNA_ANSWER_OBJECT(state, payload) {
      state.qnaAnswerObject = payload;
    },
  },
};

export default qnaStore;
