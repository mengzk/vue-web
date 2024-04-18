import AppConfig from "../../config/index";

// 上传文件
const host = AppConfig.host;
// 上传
export function upload({ file, params = {} } = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      url: `${host}/upload`,
      method: "POST",
      data: null,
      headers,
    };

    const formData = new FormData();
    formData.append("file", file);
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key]);
    });

    fetch(options.url, options)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 上传
export function uploads({ files = [], params = {} } = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      url: `${host}/upload`,
      method: "POST",
      body: null,
    };

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key]);
    });

    options.body = formData;

    fetch(options.url, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 200) {
          resolve(res.data);
        }else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 下载
export function download(url) {
  return new Promise((resolve, reject) => {});
}
