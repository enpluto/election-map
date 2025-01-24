import { PartyColor } from "../../../constants/party";

const CandidateChart = () => {
  const resultDataset = [
    {
      party: "民主進步黨",
      name: "賴清德",
      percentage: "57.1%",
    },
    {
      party: "中國國民黨",
      name: "侯友宜",
      percentage: "38.6%",
    },
    {
      party: "台灣民眾黨",
      name: "柯文哲",
      percentage: "4.3%",
    },
  ];

  const BarChart = ({ data }) => {
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
            style={{ width: `${data.percentage}` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="candidate-wrapper">
      <span className="h1-topic">投票結果</span>
      <ul className="candidate-list">
        {resultDataset.map((data) => (
          <li key={data.party} className="candidate-list__item">
            <div>
              <span className="ch-text">{data.party}</span>
              <span className="h1">{data.name}</span>
            </div>
            <BarChart data={data} />
            <span className="text">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateChart;
