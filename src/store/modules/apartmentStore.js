import { getSidoList, getGugunList, getDongList, getDealAptList, getDealAptDetail } from "@/api/apartment";
import store from "@/store";
import router from "@/router";

const apartmentStore = {
  namespaced: true,
  state: {
    sidoList: [],
    gugunList: [],
    dongList: [],

    aptObject: {
      no: "",
      dealAmount: 0,
      apartmentName: "",
      apartCode: 0,
      floor: 0,
      area: 0.0,
      lng: 0.0,
      lat: 0.0,
    },

    aptList: [],
  },
  getters: {
    getDealAptObjectObserver(state) {
      return state.aptObject;
    },
    getSidoListObserver(state) {
      return state.sidoList;
    },

    getGugunListObserver(state) {
      return state.gugunList;
    },

    getDongListObserver(state) {
      return state.dongList;
    },

    getAptListObserver(state) {
      return state.aptList;
    },
  },
  actions: {
    getSidoList({ commit }) {
      getSidoList(({ data }) => {
        commit("SET_SIDO_LIST", data);
      });
    },
    getGugunList({ commit }, { sidoName }) {
      getGugunList(sidoName, ({ data }) => {
        commit("SET_GUGUN_LIST", data);
        commit("SET_DONG_LIST", []);
      });
    },
    getDongList({ commit }, { sidoName, gugunName }) {
      getDongList(sidoName, gugunName, ({ data }) => {
        commit("SET_DONG_LIST", data);
      });
    },

    getDealAptList({ commit }, { sidoName, gugunName, dongName, word }) {
      getDealAptList(
        sidoName,
        gugunName,
        dongName,
        word,
        ({ data }) => {
          commit("SET_APT_LIST", data);
        },
        async (error) => {
          if (error.response.status === 401) {
            await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
          }
          getDealAptList(
            sidoName,
            gugunName,
            dongName,
            word,
            ({ data }) => {
              commit("SET_APT_LIST", data);
            },
            () => {
              alert("로그인이 만료되었습니다.");
              router.push({ name: "login" });
            }
          );
        }
      );
    },

    getDealAptDetail({ commit }, no) {
      getDealAptDetail(no, ({ data }) => {
        commit("SET_APT_OBJECT", data);
      });
    },
  },

  mutations: {
    SET_SIDO_LIST(state, payload) {
      state.sidoList = payload;
    },
    SET_GUGUN_LIST(state, payload) {
      state.gugunList = payload;
    },
    SET_DONG_LIST(state, payload) {
      state.dongList = payload;
    },
    SET_APT_LIST(state, payload) {
      state.aptList = payload;
    },

    SET_APT_OBJECT(state, payload) {
      state.aptObject = payload;
    },
  },
};

export default apartmentStore;
