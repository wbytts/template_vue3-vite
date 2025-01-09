<script setup lang="ts">
import { elementConfig } from "./ep-config";
</script>

<template>
  <el-config-provider v-bind="elementConfig">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
