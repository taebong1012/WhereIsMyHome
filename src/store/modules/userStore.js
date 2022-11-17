// import jwtDecode from "jwt-decode";
// import router from "@/router";
import { login, logout } from "@/api/user";

const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    // isLoginError: false,
    // userInfo: null,
    // isValidToken: false,
  },

  getters: {
    isLogin(state) {
      return state.isLogin;
    },
  },

  actions: {
    async userLogin({ commit }, user) {
      await login(
        user,
        ({ data }) => {
          if (data.msg === "success") {
            let accessToken = data["access-token"];
            let refreshToken = data["refresh-token"];

            // console.log("--" + context);
            commit("SET_IS_LOGIN", true);

            sessionStorage.setItem("access-token", accessToken);
            sessionStorage.setItem("refresh-token", refreshToken);
          } else {
            commit("SET_IS_LOGIN", false);
          }
        }
        // (error) => {
        //   console.log(error);
        // }
      );
    },

    async userLogout({ commit }) {
      await logout(({ data }) => {
        if (data.msg === "success") {
          commit("SET_IS_LOGIN", false);
        }
      });
    },
  },

  mutations: {
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
};

export default userStore;
