import CandidateChart from "./CandidateChart";
import Selector from "./Selector";
import TurnoutChart from "./TurnoutChart";

const Dashboard = () => {
  return (
    <section className="dashboard-wrapper">
      <Selector />
      <CandidateChart />
      <TurnoutChart />
    </section>
  );
};

export default Dashboard;
