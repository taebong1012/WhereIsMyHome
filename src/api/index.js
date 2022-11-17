import axios from "axios";

// local vue api axios instance
function apiInstance() {
  const instance = axios.create({
    baseURL: "http://183.97.128.216",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
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
