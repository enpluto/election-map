import { PartyColor } from "../../../constants/party";
import { useSelection } from "../../../context/SelectionContext";
import { Dataset2012 } from "../../../data/2012";
import { Dataset2016 } from "../../../data/2016";
import { Dataset2020 } from "../../../data/2020";
import { Dataset2024 } from "../../../data/2024";
import { sortByDescending } from "../../../helpers/sortByDescending";

const CandidateChart = () => {
  const { selectedArea, selectedYear } = useSelection();

  const electionData = () => {
    let electionYear;

    switch (selectedYear) {
      case 2012:
        electionYear = Dataset2012;
        break;
      case 2016:
        electionYear = Dataset2016;
        break;
      case 2020:
        electionYear = Dataset2020;
        break;
      default:
        electionYear = Dataset2024;
        break;
    }

    switch (selectedArea) {
      case "":
        return electionYear["全國"];
      default:
        return electionYear[selectedArea];
    }
  };

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
        {sortByDescending(electionData().candidates).map((data) => {
          const { party, name, votes } = data;
          const percentage = (
            (votes / electionData().validVotes) *
            100
          ).toFixed(1);

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
