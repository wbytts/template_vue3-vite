<script setup lang="ts">
import { RouterView } from "vue-router";
import { ElConfigProvider } from "element-plus";
import type { ConfigProviderProps } from "element-plus";

// Element Plus 全局配置对象
const elementConfig = {
  size: "small",
  zIndex: 3000,
  namespace: "by"
} as ConfigProviderProps;
</script>

<template>
  <el-config-provider v-bind="elementConfig">
    <RouterView/>
  </el-config-provider>
</template>

<style scoped></style>
