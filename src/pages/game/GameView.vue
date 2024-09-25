<template>
  <canvas id="canvas" class="game"></canvas>
</template>

<script setup>
import { onMounted } from 'vue';

let isDraw = false;
let radius = 30;
let animFrameId = 0;
const point = { x: 0, y: 0 };
const { innerWidth, innerHeight } = window;

onMounted(() => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  onDraw(ctx);

  canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDraw = true;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDraw) return;
    const x = e.clientX;
    const y = e.clientY;

    if(x > 0 && x < innerWidth-radius) {
      point.x = x;
    }
    if(y > 0 && y < innerHeight - radius) {
      point.y = y;
    }
    onLoop(canvas, ctx);
  });

  canvas.addEventListener('mouseup', (e) => {
    isDraw = false
  });
});

function onLoop(canvas, ctx) {
  cancelAnimationFrame(animFrameId);
  animFrameId = requestAnimationFrame(() => { }, canvas);
  onDraw(ctx);
}

function onDraw(ctx) {
  // ctx.fillStyle = 'black';
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'red';
  // ctx.fillRect(point.x, point.y, 30, 30);
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2, true);
  // ctx.strokeStyle = 'red';
  // ctx.stroke();
  ctx.fill();
}

</script>

<style>
.game {
  width: 100vw;
  height: 100vh;
}
</style>
