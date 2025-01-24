import mapSvg from "../../assets/map.svg";

const Map = () => {
  const YearSelector = () => {
    const years = ["2024 年", "2020 年", "2016 年", "2012 年", "2008 年"];

    return (
      <div className="year-selector">
        <ul>
          {years.map((year) => (
            <li key={year} className="year-selector__item ch-text">
              {year}
            </li>
          ))}
        </ul>
        <div className="year-selector__item__selected">2024 年</div>
      </div>
    );
  };

  return (
    <section className="map-wrapper">
      <img src={mapSvg} alt="map" width={688} height={880} />
      <YearSelector />
    </section>
  );
};

export default Map;
