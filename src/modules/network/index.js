import { showLoadingToast, showToast } from 'vant';

import AppConfig from "../../config/index";
import { interceptor, network } from "./config";

// 请求入口
export function request({ url, method = "GET", params = {}, headers = {} }={}) {
  return new Promise((resolve, reject) => {
    const host = AppConfig.host;
    const options = {
      url: `${host}${url}`,
      method,
      params,
      headers,
    };
    // 请求头及参数处理
    options.headers = interceptor(options.params, options.headers);
    // 显示加载中
    onShowLoading(true);

    network(options)
      .then((res) => {
        // 隐藏加载中
        onShowLoading(false);
        const { code, data, message } = parseData(res, url);
        if (code == 200) {
          resolve(data);
        } else {
          onShowToast(message);
          reject({ code, message });
        }
      })
      .catch((err) => {
        // 隐藏加载中
        onShowLoading(false);
        const { code, message } = parseError(err, url);
        onShowToast(message);
        reject({ code, message });
      });
  });
}

// 解析response数据 -
function parseData(res, url) {
  let code = res.status;
  let message = res.statusText || "ok";
  let headers = {}; // res.headers;
  let data = res.data || {};

  if (code == 200) {
    code = data.code;
    message = data.message || data.data;
    data = data.data;
  }

  return { code, data, message: "", headers };
}

// 解析错误信息 -
function parseError(res, url) {
  let code = res.code,
    message = "",
    status = -1;
  const reqInfo = res.request || {};

  if (reqInfo) {
    code = (code || "").toLowerCase();
    status = reqInfo.status;
    // url = reqInfo.responseURL || reqInfo._url;
    switch (status) {
      case 0:
        status = -1;
        message = `${
          code == "econnaborted" ? "请求超时" : "网络异常"
        }，请重新连接`;
        break;
      case 403:
        message = "请求地址不能访问";
        break;
      case 404:
        message = "请求地址不存在";
        break;
      case 405:
        message = "请求方式错误，请联系开发人员";
        break;
      case 500:
      case 502:
        message = "服务重启中, 请稍后";
        break;
      case 504:
        message = "网关连接超时, 请稍后";
        break;
      default:
        message = `抱歉, 请求失败:${status}`;
        break;
    }
  }
  return { code: status, message };
}

// 显示toast
function onShowToast(msg) {
  // console.log(msg)
  if (msg) {
    showToast(msg);
  }
}

// 显示加载中
function onShowLoading(loading, msg) {
  // console.log(loading, text);
  if(loading) {
    showLoadingToast({
      message: '加载中...',
      forbidClick: true,
    });
  }else {
    // showLoadingToast.close();
  }
}

