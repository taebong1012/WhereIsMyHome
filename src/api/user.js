import { apiInstance } from "./index.js";

const api = apiInstance();
const api_headers = apiInstance();

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function regist(user, success, fail) {
  await api.post(`/user/join`, user).then(success).catch(fail);
}

async function logout(uid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.post(`/user/logout/${uid}`).then(success).catch(fail);
}

async function mypage(success, fail) {
  api_headers.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api_headers.get(`/user`).then(success).catch(fail);
}

async function authUser(success, fail) {
  api_headers.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api_headers.get(`/user/auth`).then(success).catch(fail);
}

async function tokenRegeneration(uid, success, fail) {
  api_headers.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await api_headers.post(`/user/refresh`, uid).then(success).catch(fail);
}

async function deleteUser(success, fail) {
  api_headers.defaults.headers["refresh-token"] = sessionStorage.getItem("access-token");
  await api_headers.delete(`/user`).then(success).catch(fail);
}

export { login, logout, regist, mypage, authUser, tokenRegeneration, deleteUser };
