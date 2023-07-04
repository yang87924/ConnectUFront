<template>
  <canvas ref="canvas3d"></canvas>
</template>
  
  <script>
import { Application } from "@splinetool/runtime";

export default {
  mounted() {
    const canvas = this.$refs.canvas3d;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/c07RdMKDHVfDTc5I/scene.splinecode");
  },
  beforeUnmount() {
    // 在這裡添加清理程式碼，如果有的話
  },
};
</script>
  