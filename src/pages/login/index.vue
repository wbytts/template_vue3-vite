<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import MatrixRain from "../../components/ui/MatrixRain.vue";

const router = useRouter();

// 定义表单数据接口
interface LoginFormInterface {
  username: string;
  password: string;
}

// 表单数据
const loginForm = reactive<LoginFormInterface>({
  username: "",
  password: ""
});

// 表单规则
const rules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

// 表单引用
const loginFormRef = ref<FormInstance | null>(null);

// 登录方法
const handleLogin = async (): Promise<void> => {
  if (!loginFormRef.value) return;

  await loginFormRef.value.validate((valid: boolean) => {
    if (valid) {
      // TODO: 这里添加实际的登录逻辑
      console.log("登录表单提交:", loginForm);
      router.push("/");
    }
  });
};
</script>

<template>
  <div class="login-container">
    <MatrixRain color="#00ff41" :speed="50" :font-size="14" />
    <div class="login-box">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="terminal-title">系统登录</div>
      </div>
      <div class="terminal-content">
        <div class="terminal-prompt">$ 请输入凭证</div>
        <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="User" class="matrix-input" />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="密码"
              prefix-icon="Lock"
              @keyup.enter="handleLogin"
              class="matrix-input"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="login-button" @click="handleLogin">接入系统</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap");

.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  font-family: "Fira Code", monospace;
  position: relative;
}

.login-box {
  width: 450px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  border: 1px solid #00ff41;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
  z-index: 10;
  overflow: hidden;
}

.terminal-header {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  padding: 10px 15px;
  border-bottom: 1px solid #00ff41;
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.terminal-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ff5f56;
}

.terminal-buttons span:nth-child(2) {
  background-color: #ffbd2e;
}

.terminal-buttons span:nth-child(3) {
  background-color: #27c93f;
}

.terminal-title {
  flex-grow: 1;
  text-align: center;
  color: #00ff41;
  font-size: 16px;
  letter-spacing: 1px;
}

.terminal-content {
  padding: 30px;
}

.terminal-prompt {
  color: #00ff41;
  margin-bottom: 20px;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.matrix-input :deep(.el-input__wrapper) {
  background-color: rgba(0, 0, 0, 0.7) !important;
  border: 1px solid #00ff41 !important;
  box-shadow: none !important;
}

.matrix-input :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.5) !important;
}

.matrix-input :deep(.el-input__inner) {
  color: #00ff41 !important;
  font-family: "Fira Code", monospace;
}

.matrix-input :deep(.el-input__prefix-inner i) {
  color: #00ff41 !important;
}

.login-button {
  width: 100%;
  background-color: transparent !important;
  border: 1px solid #00ff41 !important;
  color: #00ff41 !important;
  font-family: "Fira Code", monospace;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.login-button:hover {
  background-color: rgba(0, 255, 65, 0.2) !important;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
}

:deep(.el-form-item__error) {
  color: #ff5f56;
}
</style>
