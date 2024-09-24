
<script setup>
import { ref, onMounted } from 'vue'
import { VueFlow, Panel } from '@vue-flow/core'

const nodes = ref([
  {
    id: '1',
    position: { x: 50, y: 50 },
    data: { label: 'Node 1', },
  }
]);

function addNode() {
  const id = Date.now().toString()

  nodes.value.push({
    id,
    position: { x: 150, y: 50 },
    data: { label: `Node ${id}`, },
  })
}
</script>

<template>
  <div class="container">
    <VueFlow :nodes="nodes" >
  </VueFlow>
  </div>
</template>

<style>
.container {
  border: 1px solid red;
  height: 800px;
}
</style>
