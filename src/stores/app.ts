import { ref, computed } from "vue";
import { defineStore } from "pinia";

/*
Setup Store
    ref      就是 state
    computed 就是 getters
    function 就是 actions
*/

export const useAppStore = defineStore(
  "app",
  () => {
    return {};
  },
  { persist: true }
);
