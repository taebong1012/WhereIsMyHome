import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function logout(success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.post(`/user/logout`).then(success).catch(fail);
}

async function regist(user, success, fail) {
  await api.post(`/user/join`, user, JSON.stringify(user)).then(success).catch(fail);
}

export { login, logout, regist };
