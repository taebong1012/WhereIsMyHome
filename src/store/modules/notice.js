import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";

Vue.use(Vuex);

const noticeStore = new Vuex.Store({
  state: {
    noticelist: [],
  },
  actions: {
    ["all_notice"]: (noticeStore) => {
      http.get("/");
    },
  },
});

export default noticeStore;
