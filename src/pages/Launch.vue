<script setup>
import { onMounted } from "vue";
import * as Three from "three";

import { resizeDisplay } from "../modules/system/screen";

let point = { x: 0, y: 0 };

window.addEventListener("mousedown", (res) => {
  const x = res.pageX;
  const y = res.pageY;
  point = { x, y };
  // console.log("x:", x, "y:", y);
});

// window.addEventListener("mouseup", (res) => {
//   const x = res.pageX;
//   const y = res.pageY;
//   point = { x, y };
// });
// window.addEventListener('mouseout', (res) => {
//   const x = res.pageX;
//   const y = res.pageY;
//   point = { x, y };
// });

function main() {
  const canvas = document.getElementById("webgl");

  const aspect = window.innerWidth / window.innerHeight;

  const renderer = new Three.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const camera = new Three.PerspectiveCamera(75, aspect, 0.1, 10);
  camera.position.z = 3;

  resizeDisplay(renderer, camera);

  const scene = new Three.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new Three.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const material = new Three.MeshBasicMaterial({ color: 0x44aa88 });
  const cube = new Three.Mesh(geometry, material);

  scene.add(cube);

  // 光线
  const color = 0xffffff;
  const intensity = 3;
  const light = new Three.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  renderer.render(scene, camera);

  window.addEventListener("mousemove", (res) => {
    const x = (res.pageX - point.x) / 100;
    const y = (res.pageY - point.y) / 100;
    point = { x: res.pageX, y: res.pageY };
    cube.rotation.x += x;
    cube.rotation.y += y;

    renderer.render(scene, camera);
    // console.log('x:', x, 'y:', y)
  });

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  // animate();
}

const timer = setTimeout(() => {
  clearTimeout(timer);
  main();
}, 2000);
</script>

<template>
  <div class="re-page">
    <canvas id="webgl"></canvas>
  </div>
</template>

<style scoped>
.re-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
}
</style>
