import { FilteredDataType } from "../types/types";
import { sortByDescending } from "./sortByDescending";

export const calculateVotePercentage = (filteredData: FilteredDataType) => {
  const { validVotes } = filteredData;

  const newFilteredData = sortByDescending(filteredData.candidates).map(
    (candidate) => {
      const percentage =
        ((candidate.votes / validVotes) * 100).toFixed(1) + "%";
      return { ...candidate, percentage: percentage };
    }
  );

  return { ...filteredData, candidates: newFilteredData };
};
