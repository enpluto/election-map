import { PartyColor } from "../../../constants/party";
import { useSelection } from "../../../context/SelectionContext";
import { sortByDescending } from "../../../helpers/sortByDescending";

const CandidateChart = () => {
  const { filteredData } = useSelection();
  const candidateDataset = sortByDescending(filteredData.candidates);

  const BarChart = ({ data, percentage }) => {
    const { className, logo } = PartyColor[data.party];

    return (
      <div className="bar-wrapper">
        <div className={`party-icon ${className}`}>
          <img src={`${logo}`} alt="" width={72} height={72} />
        </div>
        <div className="bar-container">
          <div className="bar-gray" />
          <div
            className={`bar ${className}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="candidate-wrapper">
      <span className="h1-topic">投票結果</span>
      <ul className="candidate-list">
        {candidateDataset.map((data) => {
          const { party, name, votes } = data;
          const percentage = ((votes / filteredData.validVotes) * 100).toFixed(
            1
          );

          return (
            <li key={party} className="candidate-list__item">
              <div style={{ minWidth: "82px" }}>
                <span className="ch-text">{party}</span>
                <span className="h1">{name}</span>
              </div>
              <BarChart data={data} percentage={percentage} />
              <span className="text">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandidateChart;
