import { useEffect, useRef, useState } from "react";
import nextSvg from "../../../../assets/next.svg";
import plusSvg from "../../../../assets/plus.svg";
import { useSelection } from "../../../../context/SelectionContext";
import { areaList } from "../data";

const AreaSelector = () => {
  const { selectedArea, selectArea } = useSelection();
  const [showList, setShowList] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
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

  const handleSelectArea = (city: string) => {
    selectArea(city);
    setShowList(false);
  };

  return (
    <div className="selector-container">
      <img src={nextSvg} alt="next" />
      {!selectedArea && (
        <div className="city">
          <img
            src={plusSvg}
            alt="plus"
            onClick={(event) => handleShowList(event)}
          />
          {showList && (
            <div className="city__list" ref={listRef}>
              {areaList.map((area) => (
                <div
                  key={area}
                  className="city__item"
                  onClick={() => handleSelectArea(area)}
                >
                  {area}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {selectedArea && <div className="city__selected">{selectedArea}</div>}
    </div>
  );
};

export default AreaSelector;
