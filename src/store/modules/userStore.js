// import jwtDecode from "jwt-decode";
import router from "@/router";
import {login, logout, regist, mypage, authUser, tokenRegeneration} from "@/api/user";

const userStore = {
    namespaced: true,
    state: {
        isLogin: false,
        uid: 0,
        myinfo: {
            uid: Number,
            id: String,
            pw: String,
            name: String,
            email: String,
            sate: String,
        }
        // isLoginError: false,
        // userInfo: null,
        // isValidToken: false,
    },

    getters: {
        isLoginObserver(state) {
            return state.isLogin;
        },
        myPageInfoObserver(state) {
            return state.myinfo;
        },

    },

    actions: {
        //로그인
        async userLogin({commit}, user) {
            console.log("dd");
            return await login(
                user,
                ({data}) => {
                    if (data.msg === "success") {
                        let accessToken = data["access-token"];
                        let refreshToken = data["refresh-token"];

                        commit("SET_IS_LOGIN", true);
                        commit("SET_USER_UID", data.uid);
                        sessionStorage.setItem("access-token", accessToken);
                        sessionStorage.setItem("refresh-token", refreshToken);
                        return true;
                    } else {
                        commit("SET_IS_LOGIN", false);
                    }
                }
            );

        },

        // 로그아웃
        async userLogout({state, commit}) {
            router.push({name: "home"});
            await logout(
                state.uid,
                ({data}) => {
                    if (data.msg === "success") {
                        sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
                        sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
                        commit("SET_IS_LOGIN", false);
                        commit("SET_USER_UID", 0);
                    }
                },
                (error) => {
                    commit("SET_USER_UID", 0);
                    commit("SET_IS_LOGIN", false);
                    sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
                    sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
                });
        },

        async authUser(context) {
            await authUser(({data}) => {
                    console.log("인증");
                    context.commit("SET_IS_LOGIN", true);
                    context.state.uid = data.uid;
                },
                async (error) => {
                    console.log("리프레시 토큰 호출");
                    await context.dispatch("tokenRegeneration", context.state.uid);
                });
        },

        async tokenRegeneration({commit}, uid) {
            await tokenRegeneration(
                uid,
                ({data}) => {
                    if (data.msg === "success") {
                        let accessToken = data["access-token"];
                        sessionStorage.setItem("access-token", accessToken);
                    }
                },
                async (error) => {
                    if (error.response.status === 401) {
                        await logout(
                            uid,
                            ({data}) => {
                                alert("RefreshToken 기간 만료!!! 다시 로그인해 주세요.");
                                commit("SET_IS_LOGIN", false);
                                router.push({name: "login"});
                            },
                            (error) => {
                                console.log(error);
                                commit("SET_IS_LOGIN", false);
                            }
                        );
                    }
                }
            );
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

        async mypage({commit}) {
            await mypage(({data}) => {
                commit("SET_MY_INFO", data);
            },);
        }
    },

    mutations: {
        SET_IS_LOGIN(state, isLogin) {
            state.isLogin = isLogin;
        },
        SET_MY_INFO(state, payload) {
            state.myinfo = payload;
        },
        SET_USER_UID(state, payload) {
            state.uid = payload;
        }
    },
};

export default userStore;
