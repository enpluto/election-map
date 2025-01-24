import nextSvg from "../../../assets/next.svg";
import plusSvg from "../../../assets/plus.svg";
import { cityDataset, districts } from "./data";

const Selector = () => {
  const CitySelector = () => {
    return (
      <div className="selector-container">
        <img src={nextSvg} alt="next" />
        <div className="city">
          <img src={plusSvg} alt="plus" />
          <div className="city__list">
            {cityDataset.map((city) => (
              <div key={city} className="city__item">
                {city}
              </div>
            ))}
          </div>
        </div>
        <div className="city__selected">高雄市</div>
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
      <div className="country">全國</div>
      <CitySelector />
      <DistSelector />
    </div>
  );
};

export default Selector;
