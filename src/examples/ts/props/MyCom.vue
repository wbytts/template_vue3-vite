<script setup lang="ts">

// 显式声明类型
const props = defineProps<{ a: string, b: number }>()

</script>

<template>
  <div>
    <div>a = {{ a }}</div>
  </div>
</template>
