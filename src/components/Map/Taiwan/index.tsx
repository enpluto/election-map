import * as d3 from "d3";
import { useRef, useState } from "react";
import { taiwanDataset } from "./data";

const Taiwan = () => {
  const [hoveredId, setHoveredId] = useState("");
  const svgRef = useRef(null);

  const handleMouseOver = (id: string) => {
    setHoveredId(id);
    bringToFront(id);
  };

  const handleMouseOut = () => {
    bringToFront("_嘉義市");
  };

  const bringToFront = (id: string) => {
    const svg = d3.select(svgRef.current);
    const target = svg.select(`#${id}`);
    if (!target.empty()) {
      target.raise();
    }
  };

  return (
    <div className="map-container">
      <svg
        ref={svgRef}
        data-name="dotted-map"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 688.43 880.08"
      >
        {taiwanDataset.map((area) => {
          const { id, name, d, dot } = area;
          const { cx, cy, r, style } = dot;

          return (
            <g
              key={id}
              id={id}
              onMouseOver={() => {
                handleMouseOver(id);
              }}
              onMouseOut={handleMouseOut}
              className="float"
            >
              <path name={name} d={d} />
              <circle className={`${style} dot`} cx={cx} cy={cy} r={r} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Taiwan;
