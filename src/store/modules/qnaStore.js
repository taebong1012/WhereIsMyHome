// import http from "@/util/http-common.js";

// import userStore from "./user";
import { getQnaList, getQnaOne } from "@/api/qna";


const qnaStore = {
  namespaced: true,
  state: {
    qnaList: [],
    qnaObject: Object,
  },

  getters: {
    getQnaListObserver(context) {
      return context.qnaList;
    },
    getQnaObjectObserver(context){
      return context.qnaObject;
    }
  },

  actions: {
    allQna({ commit }) {
      getQnaList(({data})=>{
        commit("SET_QNA_LIST", data);
      })
    },

    getQnaOne({commit}, uid){
      getQnaOne(uid, ({data})=>{
        commit("SET_QNA_OBJECT", data);
      });
    }
  },

  mutations: {
    SET_QNA_LIST(state, payload) {
      state.qnaList = payload;
    },

    SET_QNA_OBJECT(state, payload){
      state.qnaObject= payload;
    }
  },
};

export default qnaStore;
