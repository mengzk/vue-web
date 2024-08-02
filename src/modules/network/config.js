/**
 * Author: Meng
 * Date: 2023-06-09
 * Modify: 2023-06-09
 * Desc:
 */
const envData = import.meta.env // 环境变量

import Configs from "@/config/index";
import Constants from "@/config/constant";


console.log('------> envData', envData);
// 环境及服务器设置
const netHosts = {
  prod: {
    api: "http://def.demo.com",
    order: "http://order.demo.com",
    wx: "ws://iat-api.xfyun.cn/v2/iat",
  },
  test: {
    api: "http://def-test.demo.com",
    order: "http://order-test.demo.com",
    ws: "ws://iat-api.xfyun.cn/v2/iat",
  },
  dev: {
    api: "http://192.168.253.109:8087",
    order: "http://order.localhost:8087",
    ws: "ws://iat-api.xfyun.cn/v2/iat",
  },
};

// 获取网络host
export function requestUrl(tag, path) {
  return getHostFromTag(tag) + path;
}

// 获取指定标签环境域名
export function getHostFromTag(tag, env) {
  const envTag = env || 'prod';
  const domain = tag || "api";
  return netHosts[envTag][domain];
}

// 请求头及参数处理
export function mergeHeaders(headers={}) {

  return {
    // authentication: Constants.appid,
    secret: Constants.secret,
    token: Constants.token,
    ...headers
  };
}

// 请求头及参数处理
export function mergeParams(params={}) {
  params.token = '';
  return params;
  ;
}

// 配置 
export function network(options) {
  if (options.method == "POST") {
    options.body = JSON.stringify(options.params);
    delete options.params;
  }

  return fetch(options.url, options)
  .then((res) => res.json());
}