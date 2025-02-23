import { useSelection } from "../../../context/useSelection";
import YearSelector from "../../Map/YearSelector";
import AreaSelector from "./AreaSelector";

const Selector = () => {
  const { clearArea } = useSelection();

  return (
    <div className="selector-wrapper">
      <div className="selector-mode">
        <YearSelector mode="selector" />
      </div>
      <div className="country" onClick={clearArea}>
        全國
      </div>
      <AreaSelector />
    </div>
  );
};

export default Selector;
