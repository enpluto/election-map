import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { Party, PartyCircle, PartyPath } from "../../../constants/party";
import { useSelection } from "../../../context/SelectionContext";
import { sortByDescending } from "../../../helpers/sortByDescending";
import { taiwanDataset } from "../Taiwan/data";

const Taiwan = () => {
  const { selectedArea, selectArea, yearlyData } = useSelection();

  const [hoveredId, setHoveredId] = useState("");
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const svgRef = useRef(null);

  const handleMouseOver = (id: string) => {
    setHoveredId(id);
    bringToFront(id);
  };

  const handleMouseOut = () => {
    setHoveredId("");
    bringToFront("_嘉義市");
  };

  const bringToFront = (id: string) => {
    const svg = d3.select(svgRef.current);
    const target = svg.select(`#${id}`);
    if (!target.empty()) {
      target.raise();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);

      if (deviceWidth > 1280 && deviceWidth < 1440) {
        // 1280px ~ 1439px
        setWidth(500);
        setHeight(704);
      } else if (deviceWidth > 1440) {
        // 1440px ~ 1919px
        setWidth(688);
        setHeight(880);
      } else {
        // 1920px 以上

        setWidth(440);
        setHeight(563);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceWidth]);

  const handleSelectArea = (event) => {
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
        {taiwanDataset.map((area) => {
          const { id, name, d, dot } = area;
          const { cx, cy, r } = dot;

          const topParty = sortByDescending(yearlyData[name].candidates)[0]
            .party as Party;

          return (
            <>
              <g
                key={id}
                id={id}
                onMouseOver={() => {
                  handleMouseOver(id);
                }}
                onMouseOut={handleMouseOut}
                className={selectedArea === name ? "selected" : "float"}
                onClick={(event) => handleSelectArea(event)}
              >
                <path
                  name={name}
                  d={d}
                  className={selectedArea === name ? PartyPath[topParty] : ""}
                />
                {selectedArea !== name && (
                  <circle
                    className={`${PartyCircle[topParty]} dot`}
                    cx={cx}
                    cy={cy}
                    r={r}
                  />
                )}
                {hoveredId === id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="61"
                    height="48"
                    viewBox="0 0 61 48"
                    fill="none"
                    x={parseFloat(cx) - 61 / 2}
                    y={parseFloat(cy) - 48}
                    style={{ all: "unset" }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M60 1H1V29H26.8431L31 47L35.1569 29H60V1Z"
                      fill="white"
                    />
                    <text
                      x="30.5"
                      y="17"
                      font-size="16"
                      fill="black"
                      text-anchor="middle"
                      dominant-baseline="middle"
                    >
                      {name}
                    </text>
                  </svg>
                )}
              </g>
            </>
          );
        })}
      </svg>
    </div>
  );
};

export default Taiwan;
