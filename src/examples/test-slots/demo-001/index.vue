<template>
    <MyCom>
        <div>123</div>
        <div>123</div>
        
        <template v-slot:asd>
            123123
        </template>

        <template v-slot:qwe="scope">
            123123
        </template>
    </MyCom>
</template>

<script setup>
import MyCom from './my-com.vue'
</script>

<style scoped>
</style>
