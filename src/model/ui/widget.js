/**
 * Author: Meng
 * Date: 2024-09-26
 * Modify: 2024-09-26
 * Desc:
 */

export default class Widget {
  context = null;
  width = 0;
  height = 0;
  animFrameId = 0;

  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;

    this.onCreate();
    this.touchListener();
    this.loop();
    this.onMount();
  }

  /**
   * 创建实例
   */
  onCreate() {
    console.log("widget-------> create");
  }

  loop() {
    // 清除上一局的动画
    window.cancelAnimationFrame(this.animFrameId);
    // 重新绘制
    this.animFrameId = window.requestAnimationFrame(() => {
      this.loop();
    }, canvas);
    // 清除画布
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制
    this.render(this.context);
  }

  touchListener() {
    canvas.removeEventListener("touchstart", this.touchStart);
    canvas.removeEventListener("touchmove", this.touchMove);
    canvas.removeEventListener("touchend", this.touchEnd);

    canvas.addEventListener("touchstart", this.touchStart);
    canvas.addEventListener("touchmove", this.touchMove);
    canvas.addEventListener("touchend", this.touchEnd);
  }

  touchStart = (e) => {
    e.preventDefault();
    const touches = e.touches;
    this.onTouchStart(touches);
  };
  touchMove = (e) => {
    const touches = e.touches;
    this.onTouchMove(touches);
  };
  touchEnd = (e) => {
    const touches = e.touches;
    this.onTouchEnd(touches);
  };

  /**
   * 触点接触屏幕
   * @param {*} touches
   */
  onTouchStart(touches) {}
  /**
   * 触点移动
   * @param {*} touches
   */
  onTouchMove(touches) {}
  /**
   * 触点离开屏幕
   * @param {*} touches
   */
  onTouchEnd(touches) {}

  /**
   * 重新加载
   */
  onRestart() {
    console.log("widget-------> restart");
    // this.loop();
    this.render(this.context);
  }

  /**
   * 加载完成
   */
  onMount() {
    console.log("widget-------> mount");
  }

  /**
   * 渲染
   */
  render(context) {
    console.log("widget-------> render");
  }

  /**
   * 显示
   */
  onShow() {
    console.log("widget-------> show");
  }

  /**
   * 隐藏
   */
  onHint() {
    console.log("widget-------> hint");
  }

  /**
   * 销毁
   */
  onDestroy() {
    console.log("widget-------> destroy");
    window.cancelAnimationFrame(this.animFrameId);
    this.context = null;

    canvas.removeEventListener("touchstart", this.onTouchStart);
    canvas.removeEventListener("touchmove", this.onTouchMove);
    canvas.removeEventListener("touchend", this.onTouchEnd);
  }
}
