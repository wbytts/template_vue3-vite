<template>
  <div style="padding: 50px;">
    <el-table v-custom-column :data="tableData" style="width: 100%" border>
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="age" label="Age" />
    </el-table>
  </div>
</template>

<script setup lang="ts">

const tableData: any[] = [
  { id: 1, name: 'Tom', age: 20 },
  { id: 2, name: 'Jerry', age: 25 },
  { id: 3, name: 'Lily', age: 30 },
  { id: 4, name: 'Lucy', age: 35 },
  { id: 5, name: 'Mary', age: 40 },
  { id: 6, name: 'Mike', age: 45 },
  { id: 7, name: 'John', age: 50 },
  { id: 8, name: 'Peter', age: 55 },
  { id: 9, name: 'Kate', age: 60 },
]

</script>

<style scoped></style>
