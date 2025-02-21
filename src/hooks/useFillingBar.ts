import { useEffect, useRef, useState } from "react";
import { CandidateDataType } from "../types/types";

interface UseFillingBarProps {
  data: CandidateDataType[];
  duration: number;
}

export const useFillingBar = ({ data, duration }: UseFillingBarProps) => {
  const [currentValues, setCurrentValues] = useState<string[]>(
    new Array(data.length).fill("0")
  );

  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const animate = () => {
      const elapsedTime = performance.now() - startTimeRef.current!;
      const progress = Math.min(elapsedTime / duration, 1);

      const newValues = data.map((candidate) =>
        (progress * Number(candidate.percentage)).toFixed(1)
      );

      setCurrentValues(newValues);

      if (
        newValues.some(
          (value, index) => Number(value) < Number(data[index].percentage)
        )
      ) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [data, duration]);

  return currentValues;
};
