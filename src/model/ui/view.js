/**
 * Author: Meng
 * Date: 2024-09-03
 * Desc: 基础布局
 */

export default class View {
  background = "transparent"; // 背景色
  context = null; // 绘制上下文
  width = 0; // 宽度
  height = 0; // 高度
  padding = 0; // 内边距
  margin = 0; // 外边距
  radius = 0; // 倒角
  x = 0; // 坐标 x
  y = 0; // 坐标 y

  constructor(context, width, height, x, y, background) {
    this.context = context;
    this.width = width || 10;
    this.height = height || 10;
    this.x = x || 0;
    this.y = y || 0;
    this.background = background || "white";

    this.layout();
  }

  /**
   * 布局
   */
  layout() {
    this.context.fillStyle = this.background;
    this.context.fillRect(this.x, this.y, this.width, this.height);

    this.draw();
  }

  /**
   * 测量
   */
  measure() {
    return {
      width: this.width,
      height: this.height,
      padding: this.padding,
      margin: this.margin,
      radius: this.radius,
      x: this.x,
      y: this.y,
    };
  }

  /**
   * 绘制
   */
  draw() {}

  /**
   * 更新
   */
  update = () => {
    this.context.clearRect(this.x, this.y, this.width, this.height);
    this.layout();
  };

  /**
   * 销毁
   */
  destroy = () => {
    this.context.clearRect(this.x, this.y, this.width, this.height);
  };

  /**
   * 是否包含
   * @param {number} x1
   * @param {number} y1
   */
  contains = (x1, y1) => {
    return (
      x1 >= this.x &&
      x1 <= this.x + this.width &&
      y1 >= this.y &&
      y1 <= this.y + this.height
    );
  };

  /**
   * 是否出界
   */
  outOfBounds = () => {
    return (
      this.x < 0 ||
      this.y < 0 ||
      this.x > this.context.canvas.width ||
      this.y > this.context.canvas.height
    );
  };
}
