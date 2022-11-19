import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import userStore from "../store/modules/userStore";
import noticeStore from "../store/modules/noticeStore";
import qnaStore from "../store/modules/qnaStore";
import apartmentStore from "@/store/modules/apartmentStore";
import interestStore from "@/store/modules/interestStore"
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
    state: {},

    modules: {
        userStore,
        noticeStore,
        qnaStore,
        apartmentStore,
        interestStore,
    },

    plugins: [
        createPersistedState({
            // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
            storage: sessionStorage,
        }),
    ],
});
