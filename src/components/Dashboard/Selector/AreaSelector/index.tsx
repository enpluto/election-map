import { useRef, useState } from "react";
import nextSvg from "../../../../assets/next.svg";
import plusSvg from "../../../../assets/plus.svg";
import { useSelection } from "../../../../context/SelectionContext";
import { areaList } from "../../../../data/list";
import useClickOutside from "../../../../hooks/useClickOutside";

const AreaSelector = () => {
  const { selectedArea, selectArea } = useSelection();
  const [showList, setShowList] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useClickOutside(listRef, () => setShowList(false));

  const handleShowList = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowList((prev) => !prev);
  };

  const handleSelectArea = (city: string) => {
    selectArea(city);
    setShowList(false);
  };

  const AreaList = () => {
    return (
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
    );
  };

  const hasSelectedArea = () => {
    if (!selectedArea) {
      return <AreaList />;
    } else {
      return <div className="city__selected">{selectedArea}</div>;
    }
  };

  return (
    <div className="selector-container">
      <img src={nextSvg} alt="next" />
      {hasSelectedArea()}
    </div>
  );
};

export default AreaSelector;
