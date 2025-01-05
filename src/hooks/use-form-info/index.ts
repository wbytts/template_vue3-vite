import { ref } from 'vue'


export function useFormInfo() {

  const model = ref({})
  const page = ref({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })


  return {
    model,
    page
  }
}

