import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const TurnoutChart = () => {
  const turnoutDataset = [
    { title: "投票率", value: "74.9%" },
    { title: "有效票數", value: "14,300,940" },
    { title: "投票數", value: "14,464,571" },
    { title: "無效票數", value: "163,631" },
  ];

  const DonutChart = () => {
    const Chart = () => {
      ChartJS.register(Tooltip, ArcElement);

      const ratio = turnoutDataset.find(
        (data) => data.title === "投票率"
      )?.value;

      const valid = Number(ratio?.replace("%", ""));
      const invalid = 100 - valid;

      const data = {
        datasets: [
          {
            data: [valid, invalid],
            backgroundColor: ["#A6A6A6", "#D9D9D9"],
            borderWidth: 0,
          },
        ],
      };

      const options = {
        cutout: "70%",
        responsive: true,
      };

      return (
        <Doughnut data={data} options={options} width={136} height={136} />
      );
    };

    return (
      <div className="donut-wrapper">
        <Chart />
        <span className="ch-text">投票率</span>
      </div>
    );
  };

  const TurnoutState = () => {
    return (
      <ul className="turnout-list">
        {turnoutDataset.map((data) => (
          <li key={data.title} className="turnout-list__item">
            <span className="ch-text">{data.title}</span>
            <span className="text">{data.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="turnout-wrapper">
      <span className="h1-topic">投票概況</span>
      <div className="turnout-container">
        <DonutChart />
        <TurnoutState />
      </div>
    </div>
  );
};

export default TurnoutChart;
