import { getNewsList } from "@/api/news";

const newsStore = {
  namespaced: true,

  state: {
    newslist: [],
  },
  getters: {
    getNewsListObserver(context) {
      return context.newslist;
    },
  },
  actions: {
    async getNewsList({ commit }) {
      commit("SET_NEWS_LIST", []);
      await getNewsList(
        ({ data }) => {
          console.log("뉴스 받아오는 actions", data);
          commit("SET_NEWS_LIST", data);
        },
        (error) => {
          console.log("뉴스 가져오는데 에러뜸");
        }
      );
    },
  },
  mutations: {
    SET_NEWS_LIST(state, payload) {
      console.log("payload", payload);
      state.newslist = payload;
      console.log("state.newslist", state.newslist);
    },
  },
};

export default newsStore;
