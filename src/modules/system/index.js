/**
 * Author: Meng
 * Date: 2024-04-15
 * Modify: 2024-04-15
 * Desc: 
 */

export function systemInit() {
  deviceInfo();
}

// 获取设备信息
function deviceInfo() {
  const ua = navigator.userAgent;
  // 浏览器版本信息
  const info = {
    trident: ua.indexOf("Trident") > -1,
    presto: ua.indexOf("Presto") > -1,
    webKit: ua.indexOf("AppleWebKit") > -1,
    gecko: ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") > -1,
    mobile: !!ua.match(/AppleWebKit.*Mobile.*/),
    ios: !!ua.match(/\(i[^;]+;( U;)? CPua.+Mac OS X/),
    android: ua.indexOf("Android") > -1 || ua.indexOf("Linux") > -1,
    iPhone: ua.indexOf("iPhone") > -1,
    iPad: ua.indexOf("iPad") > -1,
    webApp: ua.indexOf("Safari") > -1,
    weixin:
      (ua.indexOf("MicroMessenger") > -1 &&
        u
          .replace(/.*(MicroMessenger\/[^\s]*).*/, "$1")
          .replace("MicroMessenger/", "")) ||
      false,
    appVersion:
      ua.indexOf("yourapp(") > -1
        ? ua.match(/yourapp\(\S+\)/)[0].slice(7, -1)
        : "3.0.0",
  };
  console.log(info);
}
