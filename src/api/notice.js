import { apiInstance } from "./index.js";

const api = apiInstance();

async function getNoticeList(success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/notice`).then(success).catch(fail);
}

export { getNoticeList };
