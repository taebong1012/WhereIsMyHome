import { apiInstance } from "./index.js";

const api = apiInstance();

async function getQnaList(success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/question`).then(success).catch(fail);
}

async function getQnaOne(uid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/question/${uid}`).then(success).catch(fail);
}


export { getQnaList, getQnaOne };
