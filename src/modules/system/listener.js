/**
 * Author: Meng
 * Date: 2024-08-02
 * Modify: 2024-08-02
 * Desc:
 */

function listenerInit() {
  // beforeunload事件, 在用户即将离开页面（包括刷新页面）时触发
  window.addEventListener("beforeunload", function (event) {
    console.log("页面即将刷新或关闭");
  });

  // unload事件, 当页面已经卸载（关闭）时触发
  window.addEventListener("unload", function (event) {
    console.log("页面已经卸载");
  });

  // load事件, 当页面完全加载完毕时触发
  window.addEventListener("load", function (event) {
    console.log("页面加载完成");
    // 配合 beforeunload 事件, 可以判断刷新还是新打开
  });

  // pagehide事件, 当页面隐藏时触发
  window.addEventListener("pagehide", function (event) {
    console.log("页面隐藏");
  });

  // pageshow事件, 当页面显示时触发
  window.addEventListener("pageshow", function (event) {
    console.log("页面显示");
  });

  // 切换窗口
  window.addEventListener("visibilitychange", function (event) {
    if (document.hidden) {
      console.log("窗口隐藏");
    } else {
      console.log("窗口显示");
    }
  });

  // resize事件, 当窗口或框架的大小调整时触发
  window.addEventListener("resize", function (event) {
    console.log("窗口大小调整");
  });

  // scroll事件, 当用户滚动指定的元素时触发

  // focus事件, 当元素获得焦点时触发
  window.addEventListener("focus", function (event) {
    console.log("元素获得焦点");
  });

  // blur事件, 当元素失去焦点时触发
  window.addEventListener("blur", function (event) {
    console.log("元素失去焦点");
  });

  // online事件, 当浏览器检测到网络连接时触发
  window.addEventListener("online", function (event) {
    console.log("网络连接");
  });

  // offline事件, 当浏览器检测到网络断开时触发
  window.addEventListener("offline", function (event) {
    console.log("网络断开");
  });

  // hashchange事件, 当当前 URL 的锚部分发生变化时触发
  window.addEventListener("hashchange", function (event) {
    console.log("URL锚部分变化");
  });

  // popstate事件, 当浏览器的历史记录发生变化时触发
  window.addEventListener("popstate", function (event) {
    console.log("历史记录变化");
  });

  // message事件, 当在不同的窗口或框架间发送消息时触发
  window.addEventListener("message", function (event) {
    console.log("消息发送");
  });

  // storage事件, 当存储区域改变时触发
  window.addEventListener("storage", function (event) {
    console.log("存储区域改变");
  });

  // error事件, 当在页面中发生 JavaScript 错误时触发
  window.addEventListener("error", function (event) {
    console.log("JavaScript错误");
  });

  // DOMContentLoaded事件, 当初始的 HTML 文档被完全加载和解析完成之后触发
  window.addEventListener("DOMContentLoaded", function (event) {
    console.log("HTML文档加载完成");
  });

  // DOMNodeInserted事件, 当一个节点被插入到文档中时触发

  // DOMNodeRemoved事件, 当一个节点从文档中被移除时触发
}
