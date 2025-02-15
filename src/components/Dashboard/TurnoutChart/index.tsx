import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelection } from "../../../context/SelectionContext";
import { formatNumber } from "../../../helpers/formatNumber";

const TurnoutChart = () => {
  const { filteredData } = useSelection();
  const { validVotes, invalidVotes, registeredVoters } = filteredData;

  const voterTurnout = Number(
    (((validVotes + invalidVotes) / registeredVoters) * 100).toFixed(1)
  );
  const totalVotes = validVotes + invalidVotes;

  const turnoutDataset = [
    { title: "投票率", value: voterTurnout + "%" },
    { title: "有效票數", value: formatNumber(validVotes) },
    { title: "投票數", value: formatNumber(totalVotes) },
    { title: "無效票數", value: formatNumber(invalidVotes) },
  ];

  const DonutChart = () => {
    const Chart = () => {
      ChartJS.register(Tooltip, ArcElement);

      const valid = voterTurnout;
      const invalid = 100 - voterTurnout;

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
