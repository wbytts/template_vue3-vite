import type { SetupContext } from "vue";
import { defineComponent } from "vue";

interface Props {}

interface Events {
  change: [params: any];
}

interface Slots {}

export default defineComponent({
  steup(props: Props, { attrs, slots, emit, expose }: SetupContext<Events, Slots>) {
    return () => (
      <div>
        <div>JSX/TSX</div>
      </div>
    );
  }
});
