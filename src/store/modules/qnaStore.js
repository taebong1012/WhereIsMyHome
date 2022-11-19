// import http from "@/util/http-common.js";

// import userStore from "./user";
import router from "@/router";
import {
    getQnaList,
    getQnaOne,
    getQnaAnswerList,
    createQuestion,
    searchQnaList,
    createQuestionAnswer,
    updateQuestion
} from "@/api/qna";

const qnaStore = {
    namespaced: true,
    state: {
        qnaList: [],
        qnaObject: Object,
        qnaAnswerObject: Object,
    },

    getters: {
        getQnaListObserver(context) {
            return context.qnaList;
        },
        getQnaObjectObserver(context) {
            return context.qnaObject;
        },
        getQnaAnswerObjectObserver(context) {
            return context.qnaAnswerObject;
        },
    },

    actions: {
        allQna({commit}) {
            commit("SET_QNA_LIST", []);
            getQnaList(({data}) => {
                commit("SET_QNA_LIST", data);
            }, async (error) => {
                if (error.response.status === 401) {
                    await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                }
                allQna(({data}) => {
                        commit("SET_QNA_LIST", data);
                    },
                    () => {
                        alert("로그인이 만료되었습니다.");
                        router.push({name: 'login'});
                    });
            });

        },

        async showQnaOne({commit}, uid) {
            let object = null;
            await getQnaOne(uid, ({data}) => {
                object = data;
            }, async (error) => {
                if (error.response.status === 401) {
                    await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                }
                await getQnaOne(uid,
                    ({data}) => {
                        object = data;
                    },
                    () => {
                        alert("로그인이 만료되었습니다.");
                        router.push({name: 'login'});
                    });
            });
            return object;
        },

        updateQuestion({commit}, params) {
            updateQuestion(params, ({data}) => {
                console.log("성공하긴했어");
            }, async (error) => {
                if (error.response.status === 401) {
                    await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                }
                updateQuestion(params,
                    ({data}) => {
                        commit("SET_QNA_OBJECT", data);
                    },
                    () => {
                        alert("로그인이 만료되었습니다.");
                        router.push({name: 'login'});
                    });
            });
        },

        getQnaOne({commit}, uid) {
            commit("SET_QNA_OBJECT", null);

            getQnaOne(uid, ({data}) => {
                commit("SET_QNA_OBJECT", data);
            }, async (error) => {
                if (error.response.status === 401) {
                    await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                }
                getQnaOne(uid,
                    ({data}) => {
                        commit("SET_QNA_OBJECT", data);
                    },
                    () => {
                        alert("로그인이 만료되었습니다.");
                        router.push({name: 'login'});
                    });
            });
        },

        getQnaAnswerList({commit}, uid) {
            commit("SET_QNA_ANSWER_OBJECT", []);
            getQnaAnswerList(uid, ({data}) => {
                commit("SET_QNA_ANSWER_OBJECT", data);
            }, async (error) => {
                if (error.response.status === 401) {
                    await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                }
                getDealAptList(uid,
                    ({data}) => {
                        commit("SET_QNA_ANSWER_OBJECT", data);
                    },
                    () => {
                        alert("로그인이 만료되었습니다.");
                        router.push({name: 'login'});
                    });
            });
        },

        async createQuestion({commit}, params) {
            console.log(JSON.stringify(params));
            await createQuestion(params, ({data}) => {
                router.push({
                    name: "qnalist",
                });
            }, async (error) => {
                if (error.response.status === 401) {
                    await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                }
                await createQuestion(params,
                    ({data}) => {
                        router.push({
                            name: "qnalist",
                        })
                    },
                    () => {
                        alert("로그인이 만료되었습니다.");
                        router.push({name: 'login'});
                    });
            });
        },

        searchQna({commit}, word) {
            commit("SET_QNA_LIST", []);
            searchQnaList(word, ({data}) => {
                commit("SET_QNA_LIST", data);
            }, async (error) => {
                if (error.response.status === 401) {
                    await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                }
                searchQnaList(word,
                    ({data}) => {
                        commit("SET_QNA_LIST", data);
                    },
                    () => {
                        alert("로그인이 만료되었습니다.");
                        router.push({name: 'login'});
                    });
            });
        },

        async createQuestionAnswer({commit}, params) {
            let status = false;
            await createQuestionAnswer(params,
                ({data}) => {
                    status = true;
                }, async (error) => {

                    if (error.response.status === 401) {
                        await store.dispatch("userStore/tokenRegeneration", store.getters["userStore/getUserUidObserver"]);
                    }
                    await createQuestionAnswer(params,
                        ({data}) => {
                            status = true;
                        },
                        () => {
                            alert("로그인이 만료되었습니다.");
                            router.push({name: 'login'});
                        });
                });
            return status;
        },
    },

    mutations: {
        SET_QNA_LIST(state, payload) {
            state.qnaList = payload;
        },

        SET_QNA_OBJECT(state, payload) {
            state.qnaObject = payload;
        },

        SET_QNA_ANSWER_OBJECT(state, payload) {
            state.qnaAnswerObject = payload;
        },
    },
};

export default qnaStore;
