// import http from "@/util/http-common.js";

// import userStore from "./user";
import {getQnaList, getQnaOne, getQnaAnswerList} from "@/api/qna";


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
        }
    },

    actions: {
        allQna({commit}) {
            getQnaList(({data}) => {
                commit("SET_QNA_LIST", data);
            })
        },

        getQnaOne({commit}, uid) {
            getQnaOne(uid, ({data}) => {
                commit("SET_QNA_OBJECT", data);
            });
        },

        getQnaAnswerList({commit}, uid) {
            getQnaAnswerList(uid, ({data}) => {
                commit("SET_QNA_ANSWER_OBJECT", data);
            })
        }
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
        }
    },
};

export default qnaStore;
