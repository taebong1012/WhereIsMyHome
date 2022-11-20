import { createInterest, deleteInterest, isExist, getInterestAptList } from "@/api/interest";
import store from "@/store";
import router from "@/router";

const interestStore = {
  namespaced: true,

  state: {
    aptList: [],
  },
  getters: {
    getInterestListObserver(state) {
      return state.aptList;
    },
  },
  actions: {
    async createInterest({ commit }, aptCode) {
      console.log(aptCode);

      let status = false;
      await createInterest(
        aptCode,
        async ({ data }) => {
          alert("등록에 성공하였습니다.");
          status = true;
        },
        (error) => {
          status = false;
        }
      );
      return status;
    },

    async deleteInterest({ commit }, aptCode) {
      let status = false;
      await deleteInterest(aptCode, ({ data }) => {
        alert("삭제에 성공하였습니다.");
        status = true;
      });
      return status;
    },

    async isExist({ commit }, aptCode) {
      let status = false;
      await isExist(aptCode, ({ data }) => {
        if (data.msg === "true") status = true;
      });
      console.log(status);
      return status;
    },

    getInterestAptList({ commit }) {
      getInterestAptList(
        ({ data }) => {
          console.log("actions 들어옴");
          commit("SET_INTEREST_LIST", data);
        },
        async (error) => {
          if (error.response.status === 401) {
            await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
          }
          getInterestAptList(
            ({ data }) => {
              commit("SET_INTEREST_LIST", data);
            },
            () => {
              alert("로그인이 만료되었습니다.");
              router.push({ name: "login" });
            }
          );
        }
      );
    },
  },
  mutations: {
    SET_INTEREST_LIST(state, payload) {
      console.log("mutations 들어옴");
      console.log(payload);
      state.aptList = payload;
    },
  },
};

export default interestStore;
