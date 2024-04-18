export function resizeDisplay(renderer, camera) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  } else {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  return needResize;
}

export function canvasRatio(canvas) {
  const ctx = canvas.getContext("2d");

  let width = canvas.width,
    height = canvas.height;
  if (window.devicePixelRatio) {
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    // console.log(canvas.width, width)
    // canvas.style.transform = `translate(${width/4}px,${height/4}px)`
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
}
