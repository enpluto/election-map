import { useEffect, useRef, useState } from "react";
import { useSelection } from "../../../context/SelectionContext";
import BarChart from "./BarChart";

const CandidateChart = () => {
  const { filteredData } = useSelection();
  const candidateDataset = filteredData.candidates;

  const [currentValues, setCurrentValues] = useState<string[]>(
    new Array(candidateDataset.length).fill("0")
  );

  const animationDuration = 1500;
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const animate = () => {
      const elapsedTime = performance.now() - startTimeRef.current!;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      const newValues = candidateDataset.map((candidate) =>
        (progress * Number(candidate.percentage)).toFixed(1)
      );

      setCurrentValues(newValues);

      if (
        newValues.some(
          (value, index) =>
            Number(value) < Number(candidateDataset[index].percentage)
        )
      ) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [candidateDataset]);

  return (
    <div className="candidate-wrapper">
      <span className="h1-topic">投票結果</span>
      <ul className="candidate-list">
        {candidateDataset.map((candidate, index) => {
          const { party, name, percentage } = candidate;

          return (
            <li key={`${name}-${percentage}`} className="candidate-list__item">
              <div style={{ minWidth: "82px" }}>
                <span className="ch-text">{party}</span>
                <span className="h1">{name}</span>
              </div>
              <BarChart candidate={candidate} />
              <span className="text">{currentValues[index]}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandidateChart;
