import CandidateChart from "./CandidateChart";
import Selector from "./Selector";
import TurnoutChart from "./TurnoutChart";

const Dashboard = () => {
  return (
    <section className="dashboard-wrapper">
      <Selector />
      <div className="dashboard-container">
        <CandidateChart />
        <TurnoutChart />
      </div>
    </section>
  );
};

export default Dashboard;
