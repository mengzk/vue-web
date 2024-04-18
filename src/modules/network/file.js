/**
 * Author: Meng
 * Date: 2024-04-15
 * Modify: 2024-04-15
 * Desc:
 */

import axios from "axios";

const instance = axios.create({
  // baseURL: '',
  timeout: 30000, // 毫秒
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

const headers = { "Content-Type": "multipart/form-data" };
// 上传
export function upload() {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("params", new Blob([JSON.stringify({user: '', age: ''})], { type: "application/json" }));
    instance
      .request({ url: "", data, headers })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// 下载
export function download(url) {
  return new Promise((resolve, reject) => {
    instance
      .request({ url })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}


const host = 'http://la'; // 服务器地址
// const headers = {'Content-Type': 'multipart/form-data'}; // 请求头

// 上传
export function upload2({ file, path='', params = {} } = {}) {
  return new Promise((resolve, reject) => {

    const url = `${host}${path}`;

    const formData = new FormData();
    formData.append("file", file);
    // Object.keys(params).forEach((key) => {
    //   formData.append(key, params[key]);
    // });
    formData.append("params", new Blob([JSON.stringify(params)], { type: "application/json" }));

    fetch(url, { method: "POST", data: formData })
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
export function uploads2({ files = [], path='', params = {} } = {}) {
  return new Promise((resolve, reject) => {
    const url = `${host}${path}`;

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key]);
    });

    fetch(url, { method: "POST", data: formData })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}