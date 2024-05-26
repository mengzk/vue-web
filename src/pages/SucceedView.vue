<template>
  <div class="succeed">
    <span class="succeed-text">提交成功</span>
    <span class="succeed-hint">请等待管理员审核结果吧</span>
  </div>
</template>

<style>
.succeed {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.succeed-text {
  font-size: 24px;
  color: #323232;
  font-weight: 500;
}
.succeed-hint {
  font-size: 16px;
  color: #676767;
  margin-top: 12px;
  margin-bottom: 200px;
}
</style>
