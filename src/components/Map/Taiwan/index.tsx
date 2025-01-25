import { dotDataset, taiwanDataset } from "./data";

const Taiwan = () => {
  return (
    <div className="map-container">
      <svg
        id="_全台地圖_圓點"
        data-name="全台地圖+圓點"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 688.43 880.08"
      >
        {taiwanDataset.map((area) => {
          const { id, name, style, d } = area;
          return <path key={id} name={name} d={d} className={style} />;
        })}
        {dotDataset.map((area) => {
          const { id, style, cx, cy, r } = area;
          return <circle key={id} className={style} cx={cx} cy={cy} r={r} />;
        })}
      </svg>
    </div>
  );
};

export default Taiwan;
