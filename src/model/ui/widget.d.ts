/**
 * Author: Meng
 * Date: 2024-09-03
 * Desc: 页面组件
 */

declare class Widget {
  protected context: any;
  protected width: number;
  protected height: number;

  /**
   * 创建实例
   */
  protected onCreate(): void;

  /**
   * 重新加载
   */
  protected onRestart(): void;

  /**
   * 加载完成
   */
  protected onMount(): void;

  /**
   * 渲染
   */
  protected render(context: any): void;

  protected onTouchStart(touches: any): void;
  protected onTouchMove(touches: any): void;
  protected onTouchEnd(touches: any): void;

  /**
   * 显示
   */
  protected onShow(): void;

  /**
   * 隐藏
   */
  protected onHint(): void;

  /**
   * 销毁
   */
  protected onDestroy(): void;
}

export default Widget;
