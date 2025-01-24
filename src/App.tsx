import Dashboard from "./components/Dashboard";
import Map from "./components/Map";
import Nav from "./components/Nav";
import "./styles/App.scss";

function App() {
  return (
    <main>
      <Nav />
      <div className="app-container">
        <Map />
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
