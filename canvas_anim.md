## canvas 动画

文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations

由于是用 JavaScript 去操控 <canvas> 对象，这样要实现一些交互动画也是相当容易的。

可能最大的限制就是图像一旦绘制出来，它就是一直保持那样了。如果需要移动它，我们不得不对所有东西（包括之前的）进行重绘。重绘是相当费时的，而且性能很依赖于电脑的速度。

### 动画的基本步骤
可以通过以下的步骤来画出一帧：

1. 清空 canvas 除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
2. 保存 canvas 状态 如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. 绘制动画图形（animated shapes） 这一步才是重绘动画帧。
4. 恢复 canvas 状态 如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。

### 操控动画
在 canvas 上绘制内容是用 canvas 提供的或者自定义的方法，而通常，我们仅仅在脚本执行结束后才能看见结果，比如说，在 for 循环里面做完成动画是不太可能的。

因此，为了实现动画，我们需要一些可以定时执行重绘的方法。有两种方法可以实现这样的动画操控。首先可以通过 setInterval 和 setTimeout 方法来控制在设定的时间点上执行重绘。

#### 有安排地更新画布
首先，可以用window.setInterval(), window.setTimeout(),和window.requestAnimationFrame()来设定定期执行一个指定函数。

- setInterval(function, delay)
当设定好间隔时间后，function 会定期执行。

- setTimeout(function, delay)
在设定好的时间之后执行函数

- requestAnimationFrame(callback)
告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

如果你并不需要与用户互动，你可以使用 setInterval() 方法，它就可以定期执行指定代码。如果我们需要做一个游戏，我们可以使用键盘或者鼠标事件配合上 setTimeout() 方法来实现。通过设置事件监听，我们可以捕捉用户的交互，并执行相应的动作。


备注：下面的例子，采用 window.requestAnimationFrame()实现动画效果。这个方法提供了更加平缓并更加有效率的方式来执行动画，当系统准备好了重绘条件的时候，才调用绘制动画帧。一般每秒钟回调函数执行 60 次，也有可能会被降低。想要了解更多关于动画循环的信息，尤其是游戏，可以在Game development zone 参考这篇文章 Anatomy of a video game。

```js
const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // 清除画布

  ctx.fillStyle = "rgb(0 0 0 / 40%)";
  ctx.strokeStyle = "rgb(0 153 255 / 40%)";
  ctx.save();
  ctx.translate(150, 150);

  // 地球
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // 阴影
  ctx.drawImage(earth, -12, -12);

  // 月亮
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // 地球轨道
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();
```

该示例绘制一个可以显示当前时间的动画时钟。

```js
function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // 小时刻度
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // 分钟刻度
  ctx.save();
  ctx.lineWidth = 5;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const sec = now.getSeconds();
  // 要显示扫秒式的时钟，请使用：
  // const sec = now.getSeconds() + now.getMilliseconds() / 1000;
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  ctx.fillStyle = "black";

  // 显示图像描述
  canvas.innerText = `当前时间：${hr}:${min}`;

  // 时针
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // 分针
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // 秒针
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgb(0 0 0 / 0%)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}
window.requestAnimationFrame(clock);
```

备注：尽管时钟每秒只更新一次，但动画图像每秒更新 60 次（或者以你的 Web 浏览器的显示刷新率）。要使用扫描式的时钟，请将上面的 const sec 定义替换为已注释的版本。



### 鼠标追踪动画

```js
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script>
      var cn;
      //= document.getElementById('cw');
      var c;
      var u = 10;
      const m = {
        x: innerWidth / 2,
        y: innerHeight / 2,
      };
      window.onmousemove = function (e) {
        m.x = e.clientX;
        m.y = e.clientY;
      };
      function gc() {
        var s = "0123456789ABCDEF";
        var c = "#";
        for (var i = 0; i < 6; i++) {
          c += s[Math.ceil(Math.random() * 15)];
        }
        return c;
      }
      var a = [];
      window.onload = function myfunction() {
        cn = document.getElementById("cw");
        c = cn.getContext("2d");

        for (var i = 0; i < 10; i++) {
          var r = 30;
          var x = Math.random() * (innerWidth - 2 * r) + r;
          var y = Math.random() * (innerHeight - 2 * r) + r;
          var t = new ob(
            innerWidth / 2,
            innerHeight / 2,
            5,
            "red",
            Math.random() * 200 + 20,
            2,
          );
          a.push(t);
        }
        //cn.style.backgroundColor = "#700bc8";

        c.lineWidth = "2";
        c.globalAlpha = 0.5;
        resize();
        anim();
      };
      window.onresize = function () {
        resize();
      };
      function resize() {
        cn.height = innerHeight;
        cn.width = innerWidth;
        for (var i = 0; i < 101; i++) {
          var r = 30;
          var x = Math.random() * (innerWidth - 2 * r) + r;
          var y = Math.random() * (innerHeight - 2 * r) + r;
          a[i] = new ob(
            innerWidth / 2,
            innerHeight / 2,
            4,
            gc(),
            Math.random() * 200 + 20,
            0.02,
          );
        }
        //  a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
        //a[0].dr();
      }
      function ob(x, y, r, cc, o, s) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.cc = cc;
        this.theta = Math.random() * Math.PI * 2;
        this.s = s;
        this.o = o;
        this.t = Math.random() * 150;

        this.o = o;
        this.dr = function () {
          const ls = {
            x: this.x,
            y: this.y,
          };
          this.theta += this.s;
          this.x = m.x + Math.cos(this.theta) * this.t;
          this.y = m.y + Math.sin(this.theta) * this.t;
          c.beginPath();
          c.lineWidth = this.r;
          c.strokeStyle = this.cc;
          c.moveTo(ls.x, ls.y);
          c.lineTo(this.x, this.y);
          c.stroke();
          c.closePath();
        };
      }
      function anim() {
        requestAnimationFrame(anim);
        c.fillStyle = "rgba(0,0,0,0.05)";
        c.fillRect(0, 0, cn.width, cn.height);
        a.forEach(function (e, i) {
          e.dr();
        });
      }
    </script>
    <style>
      #cw {
        position: fixed;
        z-index: -1;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: rgba(0, 0, 0, 0.05);
      }
    </style>
  </head>
  <body>
    <canvas id="cw"></canvas>
    qwerewr
  </body>
</html>
```


## 高级动画

通过基本动画以及逐步了解了让物件移动的方法。在这一部分，将会对运动有更深的了解并学会添加一些符合物理的运动以让我们的动画更加高级。

绘制小球
画一个小球用于动画学习，所以首先在画布上画一个球。下面的代码帮助我们建立画布。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

ball.draw();
```

#### 添加速率
现在我们有了一个小球，正准备添加一些基本动画，正如我们上一章所学的。又是这样，window.requestAnimationFrame() 再一次帮助我们控制动画。小球依旧依靠添加速率矢量进行移动。在每一帧里面，我们依旧用clear 清理掉之前帧里旧的圆形。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

```

#### 边界
若没有任何的碰撞检测，我们的小球很快就会超出画布。我们需要检查小球的 x 和 y 位置是否已经超出画布的尺寸以及是否需要将速度矢量反转。为了这么做，我们把下面的检查代码添加进 draw 函数：

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}

```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### 加速度
为了让动作更真实，你可以像这样处理速度，例如：

```js
ball.vy *= 0.99;
ball.vy += 0.25;
// 这会逐帧减少垂直方向的速度，所以小球最终将只会在地板上弹跳。
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();

```

### 长尾效果
现在，我们使用的是 clearRect 函数帮我们清除前一帧动画。若用一个半透明的 fillRect 函数取代之，就可轻松制作长尾效果。

```js
ctx.fillStyle = "rgba(255,255,255,0.3)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

## 添加鼠标控制
为了更好地控制小球，我们可以用 mousemove事件让它跟随鼠标活动。下面例子中，click 事件会释放小球然后让它重新跳起。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function clear() {
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", function (e) {
  if (!running) {
    clear();
    ball.x = e.offsetX;
    ball.y = e.offsetY;
    ball.draw();
  }
});

canvas.addEventListener("click", function (e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
```