/**
 * Author: Meng
 * Date: 2024-07-16
 * Modify: 2024-07-16
 * Desc:
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicemotion_event
 */

/**
 * 获取设备方向
 */
export function deviceOrientation() {
  // window.removeEventListener("deviceorientation", handleOrientation);
  window.addEventListener("deviceorientation", handleOrientation, true);
}

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

  console.log(absolute, alpha, beta, gamma);
}

/**
 * 设备加速度
 */
export function deviceMotion() {
  console.log("deviceMotion");
  // window.removeEventListener("devicemotion", handleMotion);
  window.addEventListener("devicemotion", handleMotion, true);
  document.addEventListener("devicemotion", handleMotion, true);
}

function handleMotion(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;
  console.log(x, y, z);
}
