import { useRef, useState } from "react";
import { useSelection } from "../../../context/SelectionContext";
import useClickOutside from "../../../hooks/useClickOutside";

const YearSelector = () => {
  const { selectedYear, setSelectedYear } = useSelection();
  const [showList, setShowList] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const years = [2024, 2020, 2016, 2012];

  useClickOutside(listRef, () => setShowList(false));

  const handleShowList = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowList((prev) => !prev);
  };

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
    setShowList(false);
  };

  return (
    <div className="year-selector" ref={listRef}>
      {showList && (
        <ul>
          {years.map((year) => (
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
      <div className="year-selector__item__selected" onClick={handleShowList}>
        {selectedYear} 年
      </div>
    </div>
  );
};

export default YearSelector;
