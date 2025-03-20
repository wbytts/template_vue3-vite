import { ref, reactive, isRef, isReactive, type Ref } from "vue";
import { cloneDeep } from "lodash-es";

interface ResetOptions<T> {
  shallow?: boolean;
  onReset?: (state: Ref<T>) => void;
  asyncReset?: boolean;
}

interface ResetResult<T> {
  state: Ref<T>;
  reset: (partialState?: Partial<T>) => Promise<void>;
  getInitialState: () => T;
}

export function useReset<T extends object>(initialValue: T, options: ResetOptions<T> = {}): ResetResult<T> {
  const { shallow = false, onReset, asyncReset = false } = options;

  const cloneFn = shallow ? (val: T) => ({ ...val }) : cloneDeep;
  const initialState = cloneFn(initialValue);

  let state: Ref<T>;

  if (isRef(initialValue)) {
    state = initialValue as Ref<T>;
  } else if (isReactive(initialValue)) {
    state = ref(initialValue) as Ref<T>;
  } else {
    state = ref(initialValue) as Ref<T>;
  }

  const reset = async (partialState?: Partial<T>): Promise<void> => {
    try {
       if (asyncReset) {
        await new Promise<void>((resolve) => setTimeout(resolve, 0));
      }

      if (isRef(state)) {
        const refState = state as Ref<T>;

        if (partialState) {
          const newState = cloneFn({ ...cloneFn(initialState), ...partialState });
          refState.value = newState;
        } else {
          refState.value = cloneFn(initialState);
        }
      }

      if (onReset) {
        onReset(state);
      }
    } catch (error) {
      console.error("Reset failed:", error);
      throw   error;
    }
  };

  return {
    state,
    reset,
    getInitialState: () => cloneFn(initialState)
  };
}

// 保持向后兼容
export function useResetRef<T extends object>(value: T): ResetResult<T> {
  return useReset(value);
}

export function useResetReactive<T extends object>(value: T): ResetResult<T> {
  return useReset(reactive(value) as T);
}