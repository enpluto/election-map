import { useSelection } from "../../../context/useSelection";
import { useIncreasingValues } from "../../../hooks/useIncreasingValues";
import BarChart from "./BarChart";

const CandidateChart = () => {
  const { areaData } = useSelection();
  const candidateDataset = areaData.candidates;

  const currentValues = useIncreasingValues({
    data: candidateDataset,
    duration: 1500,
  });

  return (
    <div className="candidate-wrapper">
      <span className="h1-topic">投票結果</span>
      <ul className="candidate-list">
        {candidateDataset.map((candidate, index) => {
          const { party, name, percentage } = candidate;

          return (
            <li key={`${name}-${percentage}`} className="candidate-list__item">
              <div style={{ minWidth: "82px" }}>
                <span className="ch-text">{party}</span>
                <span className="h1">{name}</span>
              </div>
              <BarChart candidate={candidate} />
              <span className="text">{currentValues[index]}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandidateChart;
