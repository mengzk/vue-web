/**
 * Author: Meng
 * Date: 2023-10-14
 * Modify: 2023-10-14
 * Desc: websocket模块
 */
export function onStart() { 
  console.log('websocket onStart');
  // 创建websocket
  const ws = new WebSocket('ws://localhost:8080');

  // 连接成功
  ws.onopen = function () {
    console.log('websocket onopen');
    ws.send('Hello Server!');
  };

  // 接收消息
  ws.onmessage = function (evt) {
    console.log('websocket onmessage', evt.data);
  };

  // 关闭连接
  ws.onclose = function () {
    console.log('websocket onclose');
  };

  // 连接失败
  ws.onerror = function () {
    console.log('websocket onerror');
  };

  // 关闭连接
  // ws.close();

  // 发送消息
  // ws.send('Hello Server!');

};
