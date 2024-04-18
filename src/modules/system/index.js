// 选择文件
export function openChooseFile(accept = "image/*", multiple = false) {
  return new Promise((resolve) => {
    // const inputEle = document.createElement('input');
    const inputEle = document.getElementById("v-ar-upload-input");
    // inputEle.multiple = multiple;
    inputEle.accept = accept;
    inputEle.type = "file";
    // inputEle.capture = "camera";
    inputEle.style.display = "node";
    // inputEle.onchange = () => {}
    inputEle.addEventListener("change", () => {
      const files = inputEle.files || [];
      const list = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if ((file.type || "").includes("video") && accept !== "video/*") {
          return;
        }
        list.push(files[i]);
      }
      resolve(list);
    });
    inputEle.click();
  });
}
