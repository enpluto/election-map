import { useRef, useState } from "react";
import { useSelection } from "../../context/useSelection";
import { yearList } from "../../data/list";
import useClickOutside from "../../hooks/useClickOutside";
import { toggleDropdown } from "../../utils/toggleDropdown";

type Mode = "map" | "selector";

interface YearSelectorProps {
  mode: Mode;
}

const YearSelector = ({ mode }: YearSelectorProps) => {
  const { selectedYear, setSelectedYear } = useSelection();
  const [showList, setShowList] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useClickOutside(listRef, () => setShowList(false));

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
    setShowList(false);
  };

  return (
    <div style={{ position: "relative" }} ref={listRef}>
      {showList && (
        <ul className={mode === "selector" ? "expand-down" : ""}>
          {yearList.map((year) => (
            <li
              key={year}
              className="year-selector__item ch-text"
              onClick={() => handleSelectYear(year)}
            >
              {year} 年
            </li>
          ))}
        </ul>
      )}
      <div
        className="year-selector__item__selected"
        onClick={(e) => toggleDropdown(e, setShowList)}
      >
        {selectedYear} 年
      </div>
    </div>
  );
};

export default YearSelector;
