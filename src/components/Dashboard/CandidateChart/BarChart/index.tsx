import { Party, PartyColor } from "../../../../constants/party";
import { CandidateDataType } from "../../../../types/types";

interface BarChartPropsType {
  candidate: CandidateDataType;
  percentage: string;
}

const BarChart = ({ candidate, percentage }: BarChartPropsType) => {
  const { backgroundClassName, logo } = PartyColor[candidate.party as Party];

  return (
    <div className="bar-wrapper">
      <div className={`party-icon ${backgroundClassName}`}>
        <img src={logo} alt={candidate.party} width={72} height={72} />
      </div>
      <div className="bar-container">
        <div className="bar-gray" />
        <div
          className={`bar ${backgroundClassName}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default BarChart;
