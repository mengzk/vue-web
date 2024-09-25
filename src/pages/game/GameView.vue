<template>
  <canvas id="canvas" class="game"></canvas>
</template>

<script setup>
import { onMounted } from 'vue';
import bgImg from '../../assets/bg.png';

let isDraw = false;
let radius = 30;
let animFrameId = 0;

let count = 0;
let speed = 3;

let imgTop = 0;
const BG_WIDTH = 512
const BG_HEIGHT = 512

const point = { x: 0, y: 0 };
const { innerWidth, innerHeight } = window;

const img = new Image();
img.src = bgImg;

onMounted(() => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  onLoop(canvas, ctx);

  canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDraw = true;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDraw) return;
    const x = e.clientX;
    const y = e.clientY;

    if (x > 0 && x < innerWidth - radius) {
      point.x = x;
    }
    if (y > 0 && y < innerHeight - radius) {
      point.y = y;
    }
  });

  canvas.addEventListener('mouseup', (e) => {
    isDraw = false
  });
});

function onLoop(canvas, ctx) {
  count += 1;
  cancelAnimationFrame(animFrameId);
  animFrameId = requestAnimationFrame(() => onLoop(canvas, ctx), canvas);
  // if (count % speed == 0) {
    onDraw(ctx);
  // }
}

function onDraw(ctx) {
  // ctx.fillStyle = 'black';
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  drawBg(ctx);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2, true);
  ctx.fill();
}

function drawBg(ctx) {
  imgTop += 2;
  if (imgTop >= innerHeight) {
    imgTop = 0;
  }

  ctx.drawImage(
    img,
    0,
    0,
    BG_WIDTH,
    BG_HEIGHT,
    0,
    -innerHeight + imgTop,
    innerWidth,
    innerHeight
  )

  ctx.drawImage(
    img,
    0,
    0,
    BG_WIDTH,
    BG_HEIGHT,
    0,
    imgTop,
    innerWidth,
    innerHeight
  )
}

</script>

<style>
.game {
  width: 100vw;
  height: 100vh;
}
</style>
