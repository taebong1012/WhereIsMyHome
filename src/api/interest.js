import {apiInstance} from "./index.js";

const api_header = apiInstance();

async function createInterest(aptCode, success, fail) {
    api_header.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api_header.post(`/interest`, {aptCode: aptCode}).then(success).catch(fail);
}

async function deleteInterest(aptCode, success, fail) {
    api_header.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api_header.delete(`/interest?aptCode=${aptCode}`).then(success).catch(fail);
}

async function isExist(aptCode, success, fail) {
    api_header.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api_header.get(`/interest/info/${aptCode}`).then(success).catch(fail);
}

export {createInterest, deleteInterest,isExist};