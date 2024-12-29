
<script setup lang="ts">
// import { ref } from 'vue'

console.log("test1.vue")

const x = ref(123)

</script>

<template>
  <div>
    <input style="border: 1px solid black;" type="text" v-model="x" >
  </div>
</template>
