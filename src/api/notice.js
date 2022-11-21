import {apiInstance} from "./index.js";

const api = apiInstance();

async function getNoticeList(success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/notice`).then(success).catch(fail);
}

async function getNoticeOne(uid, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/notice/${uid}`).then(success).catch(fail);
}

async function createNotice(params, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.post(`/notice`, JSON.stringify(params)).then(success).catch(fail);
}

async function searchNotice(word, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/notice/search/${word}`).then(success).catch(fail);
}

async function deleteNotice(notice_uid, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    console.log("삭제하고싶엉... " + notice_uid);

    await api.delete(`/notice/${notice_uid}`).then(success).catch(fail);
}

export {getNoticeList, getNoticeOne, createNotice, searchNotice, deleteNotice};
