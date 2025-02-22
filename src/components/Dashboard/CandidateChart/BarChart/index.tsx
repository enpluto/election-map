import { Party, PartyColor } from "../../../../constants/party";
import { CandidateData } from "../../../../types/types";

const BarChart = ({ candidate }: { candidate: CandidateData }) => {
  const { party, percentage } = candidate;
  const { backgroundClassName, logo } = PartyColor[party as Party];

  return (
    <div className="bar-wrapper">
      <div className={`party-icon ${backgroundClassName}`}>
        <img src={logo} alt={party} width={72} height={72} />
      </div>
      <div className="bar-container">
        <div className="bar-gray" />
        <div
          key={percentage}
          className={`bar ${backgroundClassName}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default BarChart;
