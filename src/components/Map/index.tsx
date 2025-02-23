import Taiwan from "./Taiwan";
import YearSelector from "./YearSelector";

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
