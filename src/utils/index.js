/**
 * Author: Meng
 * Date: 2024-04-15
 * Modify: 2024-04-15
 * Desc: 
 */


// 验证手机号
export function checkPhone (phone) {
  const phoneRe = /(^1[3456789][0-9]{9}$)/;
  return phoneRe.test(phone);
}
/*
验证电话号码
验证规则：区号+号码，区号以0开头，3位或4位
号码由7位或8位数字组成
区号与号码之间可以无连接符，也可以“-”连接
如01088888888,010-88888888,0955-7777777
*/
export function checkTelephone (tel) {
  let re = /^0\d{2,3}-?\d{7,8}$/;
  return re.test(tel);
}
/**
 * 隐藏手机号 180****9999
 */
export function hidePhone (phone = "") {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

/**
 * 隐藏手机号 180****9999
 */
export function replaceStrStar (str) {
  let text = "";
  if (str && str.length > 4) {
    text = str.substring(0, str.length - 4) + "****";
  }
  return text;
}

// 是否是公司名称
export function hasEmoji (str) {
  const emoji = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/;
  return emoji.test(str);
}

// 是否是中文
export function hasCNChars (str) {
  const res = /^(([\u4e00-\u9fa5]{1,10}·?[\u4e00-\u9fa5]{1,10})|[A-z]+)$/;
  return res.test(str);
}

export function hasCoupon (code) {
  const coupon = /^(([0-9]|[A-z])+)$/;
  return coupon.test(code);
}

export function checkEmail (email) {
  const res = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  return res.test(email);
}

// 格式化数字为：xx格式
export function formatNumber (num) {
  return `${num > 9 ? "" : "0"}${num}`;
}
