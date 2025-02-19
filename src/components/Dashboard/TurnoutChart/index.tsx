import { useSelection } from "../../../context/SelectionContext";
import { formatNumber } from "../../../helpers/formatNumber";
import DonutChart from "./DonutChart";

const TurnoutChart = () => {
  const { filteredData } = useSelection();
  const { validVotes, invalidVotes, registeredVoters } = filteredData;

  const voterTurnout = (
    ((validVotes + invalidVotes) / registeredVoters) *
    100
  ).toFixed(1);
  const totalVotes = validVotes + invalidVotes;

  const turnoutDataset = [
    { title: "投票率", value: voterTurnout + "%" },
    { title: "有效票數", value: formatNumber(validVotes) },
    { title: "投票數", value: formatNumber(totalVotes) },
    { title: "無效票數", value: formatNumber(invalidVotes) },
  ];

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
        <DonutChart voterTurnout={voterTurnout} />
        <TurnoutState />
      </div>
    </div>
  );
};

export default TurnoutChart;
