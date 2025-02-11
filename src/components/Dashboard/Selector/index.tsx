import { useEffect, useRef, useState } from "react";
import nextSvg from "../../../assets/next.svg";
import plusSvg from "../../../assets/plus.svg";
import { useArea } from "../../../context/AreaContext";
import { cityDataset, districts } from "./data";

const Selector = () => {
  const { selectedArea, selectArea, clearArea } = useArea();
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
    // setShowList(true);
  };

  const handleSelectArea = (city: string) => {
    selectArea(city);
    setShowList(false);
  };

  const AreaSelector = () => {
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
                {cityDataset.map((city) => (
                  <div
                    key={city}
                    className="city__item"
                    onClick={() => handleSelectArea(city)}
                  >
                    {city}
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

  const DistSelector = () => {
    return (
      <div className="selector-container">
        <img src={nextSvg} alt="next" />
        <div className="dist">
          <img src={plusSvg} alt="plus" />
          <div className="dist__list">
            {districts.map((dist) => (
              <div key={dist} className="dist__item">
                {dist}
              </div>
            ))}
          </div>
        </div>
        <div className="dist__selected" style={{ cursor: "default" }}>
          鹽埕區
        </div>
      </div>
    );
  };

  return (
    <div className="selector-wrapper">
      <div className="country" onClick={clearArea}>
        全國
      </div>
      <AreaSelector />
      {/* <DistSelector /> */}
    </div>
  );
};

export default Selector;
