import { apiInstance } from "./index.js";

const api = apiInstance();

const api_header = apiInstance();

async function getSidoList(success, fail) {
  await api.get(`/aptdeal/region`).then(success).catch(fail);
}

async function getGugunList(sidoName, success, fail) {
  await api.get(`/aptdeal/region/${sidoName}`).then(success).catch(fail);
}

async function getDongList(sidoName, gugunName, success, fail) {
  await api.get(`/aptdeal/region/${sidoName}/${gugunName}`).then(success).catch(fail);
}

async function getDealAptList(sidoName, gugunName, dongName, word, success, fail) {
  api_header.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api_header.get(`/aptdeal/${sidoName}/${gugunName}/${dongName}`).then(success).catch(fail);
}

async function getDealAptDetail(no, success, fail) {
  api_header.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api_header.get(`/aptdeal/info/${no}`).then(success).catch(fail);
}

export { getSidoList, getGugunList, getDongList, getDealAptList, getDealAptDetail };
