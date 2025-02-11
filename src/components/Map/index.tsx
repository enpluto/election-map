import { useSelection } from "../../context/SelectionContext";
import Taiwan from "./Taiwan";

const Map = () => {
  const YearSelector = () => {
    const { selectedYear, setSelectedYear } = useSelection();
    const years = [2024, 2020, 2016, 2012, 2008];

    return (
      <div className="year-selector">
        <ul>
          {years.map((year) => (
            <li
              key={year}
              className="year-selector__item ch-text"
              onClick={() => setSelectedYear(year)}
            >
              {year} 年
            </li>
          ))}
        </ul>
        <div className="year-selector__item__selected">{selectedYear} 年</div>
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
