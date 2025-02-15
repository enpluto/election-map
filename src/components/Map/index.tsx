import { useEffect, useRef, useState } from "react";
import { useSelection } from "../../context/SelectionContext";
import Taiwan from "./Taiwan";

const Map = () => {
  const YearSelector = () => {
    const { selectedYear, setSelectedYear } = useSelection();
    const [showList, setShowList] = useState(false);

    const years = [2024, 2020, 2016, 2012];

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          listRef.current &&
          !listRef.current.contains(event.target as Node)
        ) {
          setShowList(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

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

  return (
    <section className="map-wrapper">
      <Taiwan />
      <YearSelector />
    </section>
  );
};

export default Map;
