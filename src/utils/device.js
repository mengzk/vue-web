/**
 * Author: Meng
 * Date: 2024-07-17
 * Modify: 2024-07-17
 * Desc: 读取设备信息
 */

import Constants from "@/config/constant";

window.addEventListener('load', function () {
  // 设备信息
  const device = {
    agent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform||'',
    vendor: navigator.vendor,
    appVersion: navigator.appVersion,
    appName: navigator.appName,
    // product: navigator.product,
  }
  Constants.agent = device.agent;
  Constants.language = device.language;
  Constants.platform = device.platform;
  Constants.vendor = device.vendor;
  Constants.version = getBrowserVersion();

  console.log('------> device load', Constants);
});

// 解析用户代理字符串以获取浏览器版本
function getBrowserVersion() {
  const ua = navigator.userAgent;
  let match = ua.match(/(chrome|firefox|safari|opera|edg|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  let temp;

  if (/trident/i.test(match[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return `IE ${temp[1] || ''}`;
  }

  if (match[1] === 'Chrome') {
    temp = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (temp != null) return temp.slice(1).join(' ').replace('OPR', 'Opera');
  }

  match = match[2] ? [match[1], match[2]] : [navigator.appName, navigator.appVersion, '-?'];
  temp = ua.match(/version\/(\d+)/i);
  if (temp != null) match.splice(1, 1, temp[1]);

  return match.join('-');
}