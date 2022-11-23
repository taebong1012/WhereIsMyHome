import { apiInstance } from "./index.js";

const api = apiInstance();

async function getNewsList(success, fail) {
  // api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/news`).then(success).catch(fail);
}

export { getNewsList };
