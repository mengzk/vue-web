import { showLoadingToast, showToast } from "vant";

import AppConfig from "../../config/index";
import { interceptor, network } from "./config";

// 请求入口
export function request({
  url,
  method = "GET",
  params = {},
  headers = {},
} = {}) {
  return new Promise((resolve) => {
    const host = AppConfig.host;
    headers['Content-Type'] = "application/json";
    headers['token'] = "eb3b79a4f5974b6a8d78a81c60efdb02";
    headers['accessToken'] = "eb3b79a4f5974b6a8d78a81c60efdb02";
    
    const options = {
      url: `${host}${url}`,
      method,
      params,
      headers,
    };
    // 显示加载中
    onShowLoading(true);

    network(options)
      .then((res) => {
        // 隐藏加载中
        onShowLoading(false);
        // const { code, data, msg } = parseData(res, url);
        resolve(res);
      })
      .catch((err) => {
        // 隐藏加载中
        onShowLoading(false);
        const { code, msg } = parseError(err, url);
        onShowToast(message);
        resolve({ code, msg });
      });
  });
}

// 解析response数据 -
function parseData(res, url) {
  let code = res.status;
  let msg = res.statusText || "ok";
  let data = res.data || {};

  if (code == 200) {
    code = data.code;
    msg = data.statusText || data.data;
    data = data.data;
  }else {
    msg = data.returnMsg || data.data;
  }
  return { code, data, msg: "" };
}

// 解析错误信息 -
function parseError(res, url) {
  let code = res.code,
    msg = "",
    status = -1;
  const reqInfo = res.request || {};

  if (reqInfo) {
    code = (code || "").toLowerCase();
    status = reqInfo.status;
    // url = reqInfo.responseURL || reqInfo._url;
    switch (status) {
      case 0:
        status = -1;
        msg = `${code == "econnaborted" ? "请求超时" : "网络异常"}，请重新连接`;
        break;
      case 403:
        msg = "请求地址不能访问";
        break;
      case 404:
        msg = "请求地址不存在";
        break;
      case 405:
        msg = "请求方式错误，请联系开发人员";
        break;
      case 500:
      case 502:
        msg = "服务重启中, 请稍后";
        break;
      case 504:
        msg = "网关连接超时, 请稍后";
        break;
      default:
        msg = `抱歉, 请求失败:${status}`;
        break;
    }
  }
  return { code: status, msg };
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
  if (loading) {
    showLoadingToast({
      message: "加载中...",
      forbidClick: true,
    });
  } else {
    // showLoadingToast.close();
  }
}
