import { useSelection } from "../../../context/useSelection";
import { formatNumber } from "../../../utils/formatNumber";
import DonutChart from "./DonutChart";
import TurnoutState from "./TurnoutState";

const TurnoutChart = () => {
  const { areaData } = useSelection();
  const { validVotes, invalidVotes, registeredVoters } = areaData;

  const totalVotes = validVotes + invalidVotes;
  const voterTurnout = ((totalVotes / registeredVoters) * 100).toFixed(1);

  const turnoutList = [
    { title: "投票率", value: voterTurnout + "%" },
    { title: "有效票數", value: formatNumber(validVotes) },
    { title: "投票數", value: formatNumber(totalVotes) },
    { title: "無效票數", value: formatNumber(invalidVotes) },
  ];

  return (
    <div className="turnout-wrapper">
      <span className="h1-topic">投票概況</span>
      <div className="turnout-container">
        <DonutChart voterTurnout={voterTurnout} />
        <TurnoutState turnoutList={turnoutList} />
      </div>
    </div>
  );
};

export default TurnoutChart;
