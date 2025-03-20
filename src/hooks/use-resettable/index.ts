import { ref, type Ref, reactive } from "vue";
import { cloneDeep } from "lodash-es";

interface ResettableRef<T> {
  state: Ref<T>;
  reset: () => void;
}

export function useResettableRef<T>(value: T): ResettableRef<T> {
  const initialValue = cloneDeep(value);
  // const state = ref(value); // 为什么这样会报错?
  // const state: Ref<T> = ref(value); // 这样也会报错
  const state = ref(value) as Ref<T>;

  const reset = () => {
    state.value = cloneDeep(initialValue);
  };

  return { state, reset };
}

interface ResettableReactive<T> {
  state: T;
  reset: () => void;
}

export function useResettableReactive<T extends object>(value: T): ResettableReactive<T> {
  const initialValue = cloneDeep(value);
  const state = reactive(value) as T;

  const reset = () => {
    Object.assign(state, cloneDeep(initialValue));
  };

  return { state, reset };
}
