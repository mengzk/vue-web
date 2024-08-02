/**
 * Author: Meng
 * Date: 2024-07-06
 * Modify: 2024-07-06
 * Desc: 常量配置
 * 监听刷新动作,刷新时存储数据,刷新结束后读取数据
 */

const Constants = {
  version: '1.0.0',
  platform: '',
  secret: '',
  appid: '',
  token: '',
  userId: '',
  
  screen: {
    width: window.innerWidth,
    height: window.innerHeight,
    scale: window.devicePixelRatio,
    statusHeight: getProperty('--status-bar-height')
  },
  safe: {
    top: getProperty('--safe-area-inset-top'),
    right: getProperty('--safe-area-inset-right'),
    bottom: getProperty('--safe-area-inset-bottom'),
    left: getProperty('--safe-area-inset-left'),
  }
};

// 获取css变量值
function getProperty(propertyKey='') {
  const num = getComputedStyle(document.documentElement).getPropertyValue(propertyKey)||'0'
  return parseInt(num);
}
// 设置css变量值
function setProperty(propertyKey='', value='') {
  document.documentElement.style.setProperty(propertyKey, value);
}

console.log('Constants', Constants);

export default Constants;