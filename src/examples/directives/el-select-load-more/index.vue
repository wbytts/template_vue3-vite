<template>
  <div>
    <el-select v-model="opt" v-el-select-load-more="loadMore">
      <el-option label="选项1" value="1"></el-option>
      <el-option label="选项2" value="2"></el-option>
      <el-option label="选项3" value="3"></el-option>
      <el-option label="选项4" value="4"></el-option>
      <el-option label="选项5" value="5"></el-option>
      <el-option label="选项6" value="6"></el-option>
      <el-option label="选项7" value="7"></el-option>
      <el-option label="选项8" value="8"></el-option>
      <el-option label="选项9" value="9"></el-option>
    </el-select>
  </div>
</template>

<script setup>
const opt = ref();

function loadMore() {
  console.log("加载更多...");
}
</script>
