<template>
  <iframe
    id="tools-web"
    class="tools-web"
    src="https://cn.bing.com"
    width="100%"
    height="100%"
    frameborder="0"
  ></iframe>
</template>

<script>
import { onMounted } from "vue";

onMounted(() => {
  console.log("mounted");
  const iframe = document.getElementById("tools-web");
  if (iframe.attachEvent) {
    iframe.attachEvent("onload", function () {
      console.log("Local iframe is now loaded.");
    });
  } else {
    iframe.onload = function () {
      console.log("Local iframe is now loaded."); // "Local iframe is now loaded."
    };
  }
});

function onLoad(e) {
  console.log("iframe loaded", e);
}
</script>
<style>
.tools-web {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: lightblue;
}
</style>
