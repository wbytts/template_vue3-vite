import { defineComponent, type SetupContext } from "vue";

interface Props { }

interface Events {
  change: [params: any];
}

interface Slots { }

export default defineComponent({
  setup(props: Props, { attrs, slots, emit, expose }: SetupContext<Events, Slots>) {
    console.log("template-jsx.tsx")
    return () => (
      <div>
        <div>JSX/TSX</div>
      </div>
    );
  }
});
