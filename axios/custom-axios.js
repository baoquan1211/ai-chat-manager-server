import axios from "axios";
import https from "node:https";
import http from "node:http";

const instance = axios.create({
  baseURL: "https://oldie-server.vercel.app",
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  proxy: {
    protocol: "http",
    host: "proxy.fujinet.vn",
    port: 8080,
    auth: {
      username: "huy-nv2",
      password: "Abc54321",
    },
  },
  withCredentials: false, // Enable sending cookies with requests
  maxRedirects: 1000, // Disable automatic redirects
});

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //return Promise.reject(error);
    let response = {};
    /* console.log(response);
    if (error.message) {
      response.data = error.response.data;
      response.status = error.response.status;
      response.header = error.response.header;
    } */
    console.log(error);
    return response;
  }
);

export default instance;
