import YearSelector from "../common/YearSelector";
import Taiwan from "./Taiwan";

const Map = () => {
  return (
    <section className="map-wrapper">
      <Taiwan />
      <div className="map-mode">
        <YearSelector mode="map" />
      </div>
    </section>
  );
};

export default Map;
