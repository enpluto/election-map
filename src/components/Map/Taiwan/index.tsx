import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { Party, PartyCircle } from "../../../constants/party";
import { useSelection } from "../../../context/SelectionContext";
import { sortByDescending } from "../../../helpers/sortByDescending";
import { taiwanDataset } from "../Taiwan/data";

const Taiwan = () => {
  const { selectedArea, selectArea, yearlyData } = useSelection();

  const [hoveredId, setHoveredId] = useState("");
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [cx, setCX] = useState(0);
  const [cy, setCY] = useState(0);

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

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);

      console.log(deviceWidth);

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

  useEffect(() => {
    console.log("New cx:", cx, "New cy:", cy);
  }, [cx, cy]);

  const handleSelectArea = (event) => {
    const selectedId = event.currentTarget.id.slice(1);
    selectArea(selectedId);

    const path = event.currentTarget.querySelector("path") || event.target;
    if (!path) return; // 如果沒有 path，則不執行
    const bbox = path.getBBox();

    console.log(width, height);
    setCX(bbox.x + bbox.width / 2);
    setCY(bbox.y + bbox.height / 2);
  };

  return (
    <div className="map-container">
      {selectedArea ? (
        <>
          <svg
            ref={svgRef}
            data-name="dotted-map"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            transform={`translate(${-cx + width / 2}, ${
              -cy + height / 2
            }) scale(2)`}
            style={{ transition: "transform 3s" }}
          >
            {taiwanDataset.map((area) => {
              const { id, name, d, dot } = area;
              const { cx, cy, r } = dot;

              const topParty = sortByDescending(yearlyData[name].candidates)[0]
                .party as Party;

              return (
                <g key={id} id={id}>
                  <path name={name} d={d} />
                  <circle
                    className={`${PartyCircle[topParty]} dot`}
                    cx={cx}
                    cy={cy}
                    r={r}
                  />
                </g>
              );
            })}
          </svg>
        </>
      ) : (
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
              <g
                key={id}
                id={id}
                onMouseOver={() => {
                  handleMouseOver(id);
                }}
                onMouseOut={handleMouseOut}
                className="float"
                onClick={(event) => handleSelectArea(event)}
              >
                <path name={name} d={d} />
                <circle
                  className={`${PartyCircle[topParty]} dot`}
                  cx={cx}
                  cy={cy}
                  r={r}
                />
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
};

export default Taiwan;
