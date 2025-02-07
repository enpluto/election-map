import Dashboard from "./components/Dashboard";
import Map from "./components/Map";
import Nav from "./components/Nav";
import { AreaProvider } from "./context/AreaContext";
import "./styles/App.scss";

function App() {
  return (
    <AreaProvider>
      <main>
        <Nav />
        <div className="app-container">
          <Map />
          <Dashboard />
        </div>
      </main>
    </AreaProvider>
  );
}

export default App;
