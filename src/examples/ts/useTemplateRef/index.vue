<template>
  <div>
    <MyCom ref="mmm" />
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue';
import MyCom from './MyCom.vue';

const mmm = useTemplateRef<InstanceType<typeof MyCom>>("mmm")

</script>
