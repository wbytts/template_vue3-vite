import { ref, computed } from "vue";
import { defineStore } from "pinia";

// Option Store
export const useDefaultStore = defineStore("default", {
  // 持久化存储
  persist: true,

  // 相当于 data
  state: () => {
    return {};
  },

  // 相当于 computed
  getters: {},

  // 相当于 methods
  actions: {}
});
