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

export {getNoticeList, getNoticeOne};
