// import http from "@/util/http-common.js";

// import userStore from "./user";
import { getQnaList, getQnaOne } from "@/api/qna";


const qnaStore = {
  namespaced: true,
  state: {
    qnaList: [],
  },

  getters: {
    getQnaListObserver(context) {
      return context.qnaList;
    },
  },

  actions: {
    allQna({ commit }) {
      getQnaList(({data})=>{
        commit("SET_QNA_LIST", data);
      })
    },
  },

  mutations: {
    SET_QNA_LIST(state, payload) {
      state.qnaList = payload;
    },
  },
};

export default qnaStore;
