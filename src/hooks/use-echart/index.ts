import { ref } from "vue";

export function useEchart(domRef, option) {
  const chartRef = ref();

  const initEchart = () => {
    const chart = echarts.init(chartRef.value);
    chart.setOption(option);
  };

  onMounted(() => {
    initEchart();
  });

  return { chartRef };
}
