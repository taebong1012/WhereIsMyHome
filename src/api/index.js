import axios from "axios";

// local vue api axios instance
function apiInstance() {
  return axios.create({
    baseURL: "http://localhost",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

// // house deal API axios instance
// function houseInstance() {
//   const instance = axios.create({
//     baseURL: "http://몰라용.com",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   });
//   return instance;
// }

// export { apiInstance, houseInstance };
export { apiInstance };
