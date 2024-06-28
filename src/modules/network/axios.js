import axios from "axios";

const instance = axios.create({
  timeout: 20000,
  // headers: { "Content-Type": "application/json; charset=utf-8" },
});

// 请求事例
export function httpClient(options) {

  if (options.method === "GET") {
    options.params = options.data
    delete options.data
  }

  return new Promise((resolve, reject) => {
    instance.request(options)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        if (err.response) {
          console.log('http response error:', err.response);
        } else if (err.request) {
          console.log('http request error:', err.request);
        } else {
          console.log('http client error:', err.message);
        }
        reject(err);
      });
  });
}