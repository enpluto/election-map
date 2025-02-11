import Dashboard from "./components/Dashboard";
import Map from "./components/Map";
import Nav from "./components/Nav";
import { SelectionProvider } from "./context/SelectionContext";
import "./styles/App.scss";

function App() {
  return (
    <SelectionProvider>
      <main>
        <Nav />
        <div className="app-container">
          <Map />
          <Dashboard />
        </div>
      </main>
    </SelectionProvider>
  );
}

export default App;
