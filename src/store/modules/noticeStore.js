import {getNoticeList} from "@/api/notice";

const noticeStore = {
    namespaced: true,

    state: {
        noticelist: Object,
    },
    getters: {
        getNoticeListObserver(context){
            return context.noticelist;
        },
    },
    actions: {
        getNoticeList({commit}) {
            commit("SET_NOTICE_LIST", []);
            getNoticeList(({data})=>{
                commit("SET_NOTICE_LIST", data);
            });
        },
    },
    mutations: {
        SET_NOTICE_LIST(state, payload){
            state.noticelist = payload;
        }
    },
};

export default noticeStore;
