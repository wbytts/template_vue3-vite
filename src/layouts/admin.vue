<template>
  <div>
    管理端的布局
    <div>
      <router-view></router-view>

      <!-- 如果要用 keep-alive -->
      <!--
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
      -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
