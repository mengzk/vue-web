/**
 * Author: Meng
 * Date: 2024-04-16
 * Modify: 2024-04-16
 * Desc: 写法2
 *    第一个参数, 用作id,是必须传入的。习惯用法,函数命名为 use... 是组合式函数风格的约定。
 *    第二个参数, 可接受两类值：Setup 函数或 Option 对象
 * 
 *    state   是 store 的数据 (data)，
 *    getters 是 store 的计算属性 (computed)，
 *    actions 是方法 (methods)
 */
import { defineStore } from "pinia";

export const useCounterStore2 = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})