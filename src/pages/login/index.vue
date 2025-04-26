<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules } from "element-plus";

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
    <div class="login-box">
      <h2>系统登录</h2>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="User" />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="Lock"
            @keyup.enter="handleLogin"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="login-button" @click="handleLogin"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.login-box {
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.login-box h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.login-button {
  width: 100%;
}
</style>
