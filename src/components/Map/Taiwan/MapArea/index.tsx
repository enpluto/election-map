import { Party, PartyCircle, PartyPath } from "../../../../constants/party";
import { sortByDescending } from "../../../../helpers/sortByDescending";
import { ElectionDataType } from "../../../../types/types";

interface AreaType {
  id: string;
  name: string;
  d: string;
  dot: { cx: string; cy: string; r: string };
}

interface MapAreaProps {
  area: AreaType;
  yearlyData: ElectionDataType;
  selectedArea: string;
  hoveredId: string;
  handleMouseOver: (id: string) => void;
  handleMouseOut: () => void;
  handleSelectArea: (event: React.MouseEvent<SVGGElement>) => void;
}

const MapArea: React.FC<MapAreaProps> = ({
  area,
  yearlyData,
  selectedArea,
  hoveredId,
  handleMouseOver,
  handleMouseOut,
  handleSelectArea,
}) => {
  const { name, d, id, dot } = area;
  const { cx, cy, r } = dot;
  const topParty = sortByDescending(yearlyData[name].candidates)[0]
    .party as Party;

  return (
    <g
      id={id}
      onMouseOver={() => handleMouseOver(id)}
      onMouseOut={handleMouseOut}
      onClick={(e) => handleSelectArea(e)}
      className={selectedArea === name ? "selected" : "float"}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M60 1H1V29H26.8431L31 47L35.1569 29H60V1Z"
            fill="white"
          />
          <text
            x="30.5"
            y="17"
            fontSize="16"
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {name}
          </text>
        </svg>
      )}
    </g>
  );
};

export default MapArea;
