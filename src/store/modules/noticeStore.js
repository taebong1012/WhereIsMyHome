import router from "@/router";
import { getNoticeList, getNoticeOne, createNotice, searchNotice, deleteNotice } from "@/api/notice";

const noticeStore = {
  namespaced: true,

  state: {
    noticelist: [],
    noticeObject: Object,
  },
  getters: {
    getNoticeListObserver(context) {
      return context.noticelist;
    },

    getNoticeObjectObserver(context) {
      return context.noticeObject;
    },
  },
  actions: {
    getNoticeList({ commit }) {
      commit("SET_NOTICE_LIST", []);
      getNoticeList(({ data }) => {
        console.log(data);
        commit("SET_NOTICE_LIST", data);
      }, async (error) => {
        if (error.response.status === 401) {
          await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
        }
        await getNoticeList(
            ({data}) => {
            },
            () => {
              alert("로그인이 만료되었습니다.");
              router.push({name: 'login'});
            });
      });
    },
    getNoticeOne({ commit }, uid) {
      commit("SET_NOTICE_OBJECT", null);
      getNoticeOne(uid, ({ data }) => {
        console.log(data);
        commit("SET_NOTICE_OBJECT", data);
      }, async (error) => {
        if (error.response.status === 401) {
          await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
        }
        await getNoticeOne(uid,
            ({data}) => {
            },
            () => {
              alert("로그인이 만료되었습니다.");
              router.push({name: 'login'});
            });
      });
    },
    createNotice({ commit }, params) {
      console.log(JSON.stringify(params));
      createNotice(params, ({ data }) => {
        router.push({
          name: "noticelist",
        });
      }, async (error) => {
        if (error.response.status === 401) {
          await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
        }
        await createNotice(params,
            ({data}) => {
            },
            () => {
              alert("로그인이 만료되었습니다.");
              router.push({name: 'login'});
            });
      });
    },
    async searchNotice({ commit }, word) {
      commit("SET_NOTICE_LIST", []);
      searchNotice(word, ({ data }) => {
        commit("SET_NOTICE_LIST", data);
      }, async (error) => {
        if (error.response.status === 401) {
          await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
        }
        await searchNotice(word,
            ({data}) => {
            },
            () => {
              alert("로그인이 만료되었습니다.");
              router.push({name: 'login'});
            });
      });
    },
    async deleteNotice({commit}, notice_uid){
      await deleteNotice(notice_uid, ({data})=>{

      }, async (error) => {
        if (error.response.status === 401) {
          await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
        }
        await deleteNotice(notice_uid,
            ({data}) => {
            },
            () => {
              alert("로그인이 만료되었습니다.");
              router.push({name: 'login'});
            });
      });
    }
  },
  mutations: {
    SET_NOTICE_LIST(state, payload) {
      state.noticelist = payload;
    },

    SET_NOTICE_OBJECT(state, payload) {
      state.noticeObject = payload;
    },
  },
};

export default noticeStore;
