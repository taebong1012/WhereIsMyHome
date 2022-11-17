// import jwtDecode from "jwt-decode";
import router from "@/router";
import { login, logout, regist } from "@/api/user";

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
    //로그인
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

    // 로그아웃
    async userLogout({ commit }) {


      await logout(({ data }) => {
        if (data.msg === "success") {
          sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
          sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
          commit("SET_IS_LOGIN", false);
        }
      });
    },

    //회원가입
    async userRegist(user) {
      //성공하면 msg가 success로 들어오는지?
      await regist(
        user,

        // //성공 -> 회원가입 성공 alert
        () => {
          alert("회원가입 성공");
          router.push({
            name: "userlogin",
          });
        },

        // //실패 -> 회원가입 실패 alert
        () => {
          alert("회원가입 실패");
          router.push({
            name: "userregist",
          });
        }
      );
    },
  },

  mutations: {
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
};

export default userStore;
