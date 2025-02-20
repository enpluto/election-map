interface TurnoutStatePropsType {
  turnoutList: { title: string; value: string }[];
}

const TurnoutState = ({ turnoutList }: TurnoutStatePropsType) => {
  return (
    <ul className="turnout-list">
      {turnoutList.map(({ title, value }) => (
        <li key={title} className="turnout-list__item">
          <span className="ch-text">{title}</span>
          <span className="text">{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default TurnoutState;
