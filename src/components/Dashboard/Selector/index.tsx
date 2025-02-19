import { useSelection } from "../../../context/SelectionContext";
import AreaSelector from "./AreaSelector";

const Selector = () => {
  const { clearArea } = useSelection();

  return (
    <div className="selector-wrapper">
      <div className="country" onClick={clearArea}>
        全國
      </div>
      <AreaSelector />
    </div>
  );
};

export default Selector;
