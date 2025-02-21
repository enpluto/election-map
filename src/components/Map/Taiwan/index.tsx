import { useRef, useState } from "react";
import { useSelection } from "../../../context/SelectionContext";
import { mapAreaList } from "../../../data/svg/map";
import { bringToFront } from "../../../utils/bringToFront";
import MapArea from "./MapArea";

const Taiwan = () => {
  const { selectedArea, selectArea, yearlyData } = useSelection();
  const [hoveredId, setHoveredId] = useState("");
  const svgRef = useRef(null);

  const handleMouseOver = (id: string) => {
    setHoveredId(id);
    bringToFront(svgRef, id);
  };

  const handleMouseOut = () => {
    setHoveredId("");
    bringToFront(svgRef, "_嘉義市");
  };

  const handleSelectArea = (event: React.MouseEvent<SVGGElement>) => {
    const selectedId = event.currentTarget.id.slice(1);
    selectArea(selectedId);
  };

  return (
    <div className="map-container">
      <svg
        ref={svgRef}
        data-name="dotted-map"
        id="dotted-map"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 688.43 880.08"
      >
        {mapAreaList.map((area) => (
          <MapArea
            key={area.id}
            area={area}
            yearlyData={yearlyData}
            selectedArea={selectedArea}
            hoveredId={hoveredId}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
            handleSelectArea={handleSelectArea}
          />
        ))}
      </svg>
    </div>
  );
};

export default Taiwan;
