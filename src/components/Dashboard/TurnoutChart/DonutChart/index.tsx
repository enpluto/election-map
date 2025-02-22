import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

interface DonutChartProps {
  voterTurnout: string;
}

ChartJS.register(Tooltip, ArcElement);

const DonutChart = ({ voterTurnout }: DonutChartProps) => {
  const valid = Number(voterTurnout);
  const invalid = 100 - valid;

  const chartData = {
    datasets: [
      {
        data: [valid, invalid],
        backgroundColor: ["#A6A6A6", "#D9D9D9"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    responsive: true,
  };

  return (
    <div className="donut-wrapper">
      <Doughnut
        data={chartData}
        options={chartOptions}
        width={136}
        height={136}
      />
      <span className="ch-text">投票率</span>
    </div>
  );
};

export default DonutChart;
