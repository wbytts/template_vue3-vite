<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  fontSize: {
    type: Number,
    default: 14
  },
  speed: {
    type: Number,
    default: 50
  },
  color: {
    type: String,
    default: "#00ff41"
  }
});

const canvasRef = ref(null);
let animationId = null;

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");

  // 设置画布大小为窗口大小
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 调整窗口大小时重设画布大小
  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", handleResize);

  // 创建字符集
  const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

  // 计算列数
  const fontSize = props.fontSize;
  const columns = Math.floor(canvas.width / fontSize);

  // 初始化每列的Y位置
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  // 绘制矩阵雨
  const draw = () => {
    // 半透明黑色背景，形成拖尾效果
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 设置文字颜色和字体
    ctx.fillStyle = props.color;
    ctx.font = `${fontSize}px monospace`;

    // 绘制字符
    for (let i = 0; i < drops.length; i++) {
      // 随机选择一个字符
      const text = chars[Math.floor(Math.random() * chars.length)];

      // 绘制字符
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // 当字符到达底部或随机决定重置时
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      // 移动字符
      drops[i]++;
    }

    // 循环动画
    animationId = setTimeout(() => {
      requestAnimationFrame(draw);
    }, props.speed);
  };

  // 开始动画
  draw();

  // 组件卸载时清理
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    if (animationId) {
      clearTimeout(animationId);
    }
  });
});
</script>

<template>
  <canvas ref="canvasRef" class="matrix-rain"></canvas>
</template>

<style scoped>
.matrix-rain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
