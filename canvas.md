## canvas

文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors


```html
<canvas id="palette" width="300" height="300"></canvas>
```
注意：</canvas> 标签不可省



``` js
// h绘制矩形

const canvas = document.getElementById("palette");
canvas.getContext // 检测是否支持
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 60, 60);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)"; // 图形的填充颜色颜色
ctx.strokeStyle = "rgba(255,0,0,0.5)"; // 图形轮廓的颜色

ctx.globalAlpha = 0.8; // 设置透明度值
ctx.fillRect(90, 90, 30, 30);

```

## 绘制矩形

只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

#### canvas 提供了三种方法绘制矩形：
- fillRect(x, y, width, height); 		// 绘制一个填充的矩形
- strokeRect(x, y, width, height); 		// 绘制一个矩形的边框
- clearRect(x, y, width, height);		// 清除指定矩形区域，让清除部分完全透明。


## 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

1. 首先，你需要创建路径起始点。
2. 然后你使用画图命令去画出路径。
3. 之后你把路径封闭。
4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

#### 绘制函数：
- beginPath(); 	新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
- closePath(); 	闭合路径之后图形绘制命令又重新指向到上下文中。
- stroke();		通过线条来绘制图形轮廓。
- fill();		通过填充路径的内容区域生成实心的图形。

生成路径的第一步叫做 beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

闭合路径 closePath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。

备注：当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。但是调用 stroke() 时不会自动闭合。


## 移动笔触

一个非常有用的函数，而这个函数实际上并不能画出任何东西，也是上面所描述的路径列表的一部分，这个函数就是moveTo()。或者你可以想象一下在纸上作业，一支钢笔或者铅笔的笔尖从一个点到另一个点的移动过程。

- moveTo(x, y) 将笔触移动到指定的坐标 x 以及 y 上。
- lineTo(x, y) 绘制一条从当前位置到指定 x 以及 y 位置的直线。
- arc(x, y, radius, startAngle, endAngle, anticlockwise) 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。
- arcTo(x1, y1, x2, y2, radius) 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点


```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke();
  }
}
```

## 圆弧

绘制圆弧或者圆，我们使用arc()方法。当然可以使用arcTo()，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

arc(x, y, radius, startAngle, endAngle, anticlockwise)
画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。

arcTo(x1, y1, x2, y2, radius)
根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下 arc 方法，该方法有六个参数：x,y为绘制圆弧所在圆上的圆心坐标。radius为半径。startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。参数anticlockwise为一个布尔值。为 true 时，是逆时针方向，否则顺时针方向。

备注: arc() 函数中表示角的单位是弧度，不是角度。角度与弧度的 js 表达式：弧度=(Math.PI/180)*角度。


下面两个for循环，生成圆弧的行列（x,y）坐标。每一段圆弧的开始都调用beginPath()。代码中，每个圆弧的参数都是可变的，实际编程中，我们并不需要这样做。

x,y 坐标是可变的。半径（radius）和开始角度（startAngle）都是固定的。结束角度（endAngle）在第一列开始时是 180 度（半圆）然后每列增加 90 度。最后一列形成一个完整的圆。

clockwise语句作用于第一、三行是顺时针的圆弧，anticlockwise作用于二、四行为逆时针圆弧。if语句让一、二行描边圆弧，下面两行填充路径。

```
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x 坐标值
        var y = 25 + i * 50; // y 坐标值
        var radius = 20; // 圆弧半径
        var startAngle = 0; // 开始点
        var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
        var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```


## 二次贝塞尔曲线及三次贝塞尔曲线

二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。

quadraticCurveTo(cp1x, cp1y, x, y)
绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。

右边的图能够很好的描述两者的关系，二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点。

参数 x、y 在这两个方法中都是结束点坐标。cp1x,cp1y为坐标中的第一个控制点，cp2x,cp2y为坐标中的第二个控制点。

使用二次以及三次贝塞尔曲线是有一定的难度的，因为不同于像 Adobe Illustrators 这样的矢量软件，我们所绘制的曲线没有给我们提供直接的视觉反馈。这让绘制复杂的图形变得十分困难。在下面的例子中，我们会绘制一些简单有规律的图形，如果你有时间以及更多的耐心，很多复杂的图形你也可以绘制出来。

下面的这些例子没有多少困难。这两个例子中我们会连续绘制贝塞尔曲线，最后形成复杂的图形。

```
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // 二次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```
三次贝塞尔曲线
```
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    //三次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```

## 矩形
直接在画布上绘制矩形的三个额外方法，正如我们开始所见的绘制矩形，同样，也有 rect() 方法，将一个矩形路径增加到当前路径上。

rect(x, y, width, height)
绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。

当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。



## 线型

- lineWidth number 设置线条宽度,必须是正数。
- lineCap string 设置线条末端样式。butt，round 和 square。默认 butt。
- lineJoin string 设定线条与线条间接合处的样式。round、bevel 和 miter。默认 miter。
- miterLimit number 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
- lineDashOffset number 设置虚线样式的起始偏移量
- getLineDash(params) number[] 返回一个包含当前虚线样式，长度为非负偶数的数组。
- setLineDash(segments)  设置当前虚线样式。


ctx.setLineDash([4, 2]);
ctx.lineDashOffset = 0;


## 渐变

就好像一般的绘图软件一样，我们可以用线性或者径向的渐变来填充或描边。我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。

createLinearGradient(x1, y1, x2, y2)
createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。

createRadialGradient(x1, y1, r1, x2, y2, r2)
createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```
创建出 canvasGradient 对象后，我们就可以用 addColorStop 方法给它上色了。

- gradient.addColorStop(position, color)
addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(0.3, "black");
lineargradient.addColorStop(0.7, "#26C000");
lineargradient.addColorStop(1, "red");

 var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, "#00C9FF");
  radgrad3.addColorStop(0.8, "#00B5E2");
  radgrad3.addColorStop(1, "rgba(0,201,255,0)");
```

## 图案样式 Patterns

上一节的一个例子里面，我用了循环来实现图案的效果。其实，有一个更加简单的方法：createPattern。

createPattern(image, type)
该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。

备注：用 canvas 对象作为 Image 参数在 Firefox 1.5 (Gecko 1.8) 中是无效的。

图案的应用跟渐变很类似的，创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可。

```js
Copy to Clipboard
var img = new Image();
img.src = "someimage.png";
var ptrn = ctx.createPattern(img, "repeat");
````
备注：与 drawImage 有点不同，你需要确认 image 对象已经装载完毕，否则图案可能效果不对的。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // 创建新 image 对象，用作图案
  var img = new Image();
  img.src = "canvas_createpattern.png";
  img.onload = function () {
    // 创建图案
    var ptrn = ctx.createPattern(img, "repeat");
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  };
}
```

## 阴影

- shadowOffsetX = float
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。

- shadowOffsetY = float
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。

- shadowBlur = float
shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。

- shadowColor = color
shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}

```


## Canvas 填充规则

当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。

两个可能的值：
- nonzero 默认值。
- evenodd

这个例子，我们用填充规则 evenodd

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("evenodd");
}
````


## 绘制文本

两种方法来渲染文本：
- fillText(text, x, y [, maxWidth])
在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。

- strokeText(text, x, y [, maxWidth])
在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);


  ctx.strokeText("Hello world", 50, 100);
}
```

#### 有样式的文本

在上面的例子用我们已经使用了 font 来使文本比默认尺寸大一些。还有更多的属性可以让你改变 canvas 显示文本的方式：

font = value
当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。默认的字体是 10px sans-serif。

textAlign = value
文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start。

textBaseline = value
基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。

direction = value
文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。


#### 预测量文本宽度

当你需要获得更多的文本细节时，下面的方法可以给你测量文本的方法。

- measureText()
将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

下面的代码段将展示如何测量文本来获得它的宽度：
```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## 图像

canvas 更有意思的一项特性就是图像操作能力。可以用于动态的图像合成或者作为图形的背景，以及游戏界面（Sprites）等等。浏览器支持的任意格式的外部图片都可以使用，比如 PNG、GIF 或者 JPEG。你甚至可以将同一个页面中其他 canvas 元素生成的图片作为图片源。

引入图像到 canvas 里需要以下两步基本操作：

1. 获得一个指向HTMLImageElement的对象或者另一个 canvas 元素的引用作为源，也可以通过提供一个 URL 的方式来使用图片（参见例子）
2. 使用drawImage()函数将图片绘制到画布上

#### 获取图片

canvas 的 API 可以使用下面这些类型中的一种作为图片的源：

- HTMLImageElement
这些图片是由 Image() 函数构造出来的，或者任何的 <img> 元素

- HTMLVideoElement
用一个 HTML 的 <video>元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

- HTMLCanvasElement
可以使用另一个 <canvas> 元素作为你的图片源。

- ImageBitmap
这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其他几种源中生成。

这些源统一由 CanvasImageSource类型来引用。
有几种方式可以获取到我们需要在 canvas 上使用的图片。

```js
var img = new Image(); // 创建 img 元素
img.onload = function () {
  // 执行 drawImage 语句

};
img.src = "myImage.png"; // 设置图片源地址
```

使用视频帧
你还可以使用<video> 中的视频帧（即便视频是不可见的）。例如，如果你有一个 ID 为“myvideo”的<video> 元素，你可以这样做：

```js
function getMyVideo() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    return document.getElementById("myvideo");
  }
}
```

#### 绘制图片

一旦获得了源图对象，我们就可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 方法有三种形态，下面是最基础的一种。

drawImage(image, x, y)
其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    ctx.stroke();
  };
  img.src = "backdrop.png";
}
````

#### 缩放

drawImage 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。

drawImage(image, x, y, width, height)
这个方法多了 2 个参数：width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小

#### 切片

drawImage 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。

drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)


#### 控制图像的缩放行为
如同前文所述，过度缩放图像可能会导致图像模糊或像素化。你可以通过使用绘图环境的imageSmoothingEnabled属性来控制是否在缩放图像时使用平滑算法。默认值为true，即启用平滑缩放。你也可以像这样禁用此功能：

```js
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
```

## 变形 Transformations

变形是一种更强大的方法，可以将原点移动到另一点、对网格进行旋转和缩放。

#### 状态的保存和恢复
在了解变形之前，我先介绍两个在你开始绘制复杂图形时必不可少的方法。

- save()
保存画布 (canvas) 的所有状态

- restore()
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

Canvas 状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

当前应用的变形（即移动，旋转和缩放，见下）
以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
当前的裁切路径（clipping path），会在下一节介绍
你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。

#### save 和 restore 的应用示例
我们尝试用这个连续矩形的例子来描述 canvas 的状态栈是如何工作的。

第一步是用默认设置画一个大四方形，然后保存一下状态。改变填充颜色画第二个小一点的蓝色四方形，然后再保存一下状态。再次改变填充颜色绘制更小一点的半透明的白色四方形。

到目前为止所做的动作和前面章节的都很类似。不过一旦我们调用 restore，状态栈中最后的状态会弹出，并恢复所有设置。如果不是之前用 save 保存了状态，那么我们就需要手动改变设置来回到前一个状态，这个对于两三个属性的时候还是适用的，一旦多了，我们的代码将会猛涨。

当第二次调用 restore 时，已经恢复到最初的状态，因此最后是再一次绘制出一个黑色的四方形。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
  ctx.save(); // 保存默认状态

  ctx.fillStyle = "#09F"; // 在原有配置基础上对颜色做改变
  ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

  ctx.save(); // 保存当前状态
  ctx.fillStyle = "#FFF"; // 再次改变颜色配置
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形

  ctx.restore(); // 重新加载之前的颜色状态
  ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形

  ctx.restore(); // 加载默认颜色配置
  ctx.fillRect(60, 60, 30, 30); // 使用加载的配置绘制一个矩形
}

```

#### 移动
我们先介绍 translate 方法，它用来移动 canvas 和它的原点到一个不同的位置。

translate(x, y)
translate方法接受两个参数。*x *是左右偏移量，y 是上下偏移量，如右图所示。

在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 restore 方法比手动恢复原先的状态要简单得多。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = "rgb(" + 51 * i + ", " + (255 - 51 * i) + ", 255)";
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
```

#### 旋转 Rotating

它用于以原点为中心旋转 canvas。

- rotate(angle)
这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。

旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法。

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // left rectangles, rotate from canvas origin
  ctx.save();
  // blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // rotate
  ctx.translate(-200, -80); // translate back

  // draw grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}
```

#### 缩放
接着是缩放。我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。

scale(x, y)
scale方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转（例如，使用translate(0,canvas.height); scale(1,-1); 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // draw a simple rectangle, but scale it.
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // mirror horizontally
  ctx.scale(-1, 1);
  ctx.font = "48px serif";
  ctx.fillText("MDN", -135, 120);
}
```

#### 变形

对变形矩阵直接修改。

transform(a, b, c, d, e, f)
这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：

[a c e]
[b d f]
[0 0 1]

如果任意一个参数是 Infinity，变形矩阵也必须被标记为无限大，否则会抛出异常。

这个函数的参数各自代表如下：
- a (m11)
水平方向的缩放

- b(m12)
竖直方向的倾斜偏移

- c(m21)
水平方向的倾斜偏移

- d(m22)
竖直方向的缩放

- e(dx)
水平方向的移动

- f(dy)
竖直方向的移动

- setTransform(a, b, c, d, e, f)
这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform方法。如果任意一个参数是无限大，那么变形矩阵也必须被标记为无限大，否则会抛出异常。从根本上来说，该方法是取消了当前变形，然后设置为指定的变形，一步完成。

- resetTransform()
重置当前变形为单位矩阵，它和调用以下语句是一样的：ctx.setTransform(1, 0, 0, 1, 0, 0);

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  var sin = Math.sin(Math.PI / 6);
  var cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  var c = 0;
  for (var i = 0; i <= 12; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 50, 100, 100);
}
````

## 裁切路径

裁切路径和普通的 canvas 图形差不多，不同的是它的作用是遮罩，用来隐藏不需要的部分。如右图所示。红边五角星就是裁切路径，所有在路径以外的部分都不会在 canvas 上绘制出来。

如果和上面介绍的 globalCompositeOperation 属性作一比较，它可以实现与 source-in 和 source-atop差不多的效果。最重要的区别是裁切路径不会在 canvas 上绘制东西，而且它永远不受新图形的影响。这些特性使得它在特定区域里绘制图形时相当好用。

在 绘制图形 一章中，我只介绍了 stroke 和 fill 方法，这里介绍第三个方法clip。

clip()
将当前正在构建的路径转换为当前的裁剪路径。

我们使用 clip()方法来创建一个新的裁切路径。

默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, "#232256");
  lingrad.addColorStop(1, "#143778");

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}
function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 == 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```





