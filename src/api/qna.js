import {apiInstance} from "./index.js";

const api = apiInstance();

async function getQnaList(success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/question`).then(success).catch(fail);
}

async function getQnaOne(uid, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/question/${uid}`).then(success).catch(fail);
}

async function getQnaAnswerList(uid, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/answer/${uid}`).then(success).catch(fail);
}

async function createQuestion(params, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.post(`/question`, JSON.stringify(params)).then(success).catch(fail);
}

async function updateQuestion(params, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.put(`/question`, JSON.stringify(params)).then(success).catch(fail);
}

async function updateAnswer(params, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.put(`/answer`, JSON.stringify(params)).then(success).catch(fail);
}

async function searchQnaList(word, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/question/tb/${word}`).then(success).catch(fail);
}

async function createQuestionAnswer(params, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.post(`/answer`, params).then(success).catch(fail);
}

export {
    getQnaList,
    getQnaOne,
    getQnaAnswerList,
    createQuestion,
    searchQnaList,
    createQuestionAnswer,
    updateQuestion,
    updateAnswer
};
