import { useSelection } from "../../../context/SelectionContext";
import BarChart from "./BarChart";

const CandidateChart = () => {
  const { filteredData } = useSelection();
  const candidateDataset = filteredData.candidates;

  return (
    <div className="candidate-wrapper">
      <span className="h1-topic">投票結果</span>
      <ul className="candidate-list">
        {candidateDataset.map((candidate) => {
          const { party, name, percentage } = candidate;

          return (
            <li key={party} className="candidate-list__item">
              <div style={{ minWidth: "82px" }}>
                <span className="ch-text">{party}</span>
                <span className="h1">{name}</span>
              </div>
              <BarChart candidate={candidate} />
              <span className="text">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandidateChart;
