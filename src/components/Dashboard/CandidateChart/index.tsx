import { useSelection } from "../../../context/SelectionContext";
import { sortByDescending } from "../../../helpers/sortByDescending";
import BarChart from "./BarChart";

const CandidateChart = () => {
  const { filteredData } = useSelection();
  const candidateDataset = sortByDescending(filteredData.candidates);

  return (
    <div className="candidate-wrapper">
      <span className="h1-topic">投票結果</span>
      <ul className="candidate-list">
        {candidateDataset.map((candidate) => {
          const { party, name, votes } = candidate;
          const percentage: string = (
            (votes / filteredData.validVotes) *
            100
          ).toFixed(1);

          return (
            <li key={party} className="candidate-list__item">
              <div style={{ minWidth: "82px" }}>
                <span className="ch-text">{party}</span>
                <span className="h1">{name}</span>
              </div>
              <BarChart candidate={candidate} percentage={percentage} />
              <span className="text">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandidateChart;
