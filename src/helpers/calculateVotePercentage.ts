import { AreaData, CandidateData, RawAreaData } from "../types/types";
import { sortByDescending } from "./sortByDescending";

export const calculateVotePercentage = (rawAreaData: RawAreaData): AreaData => {
  const { validVotes } = rawAreaData;

  const candidateData: CandidateData[] = sortByDescending(
    rawAreaData.candidates
  ).map((candidate) => {
    const percentage = ((candidate.votes / validVotes) * 100).toFixed(1);
    return { ...candidate, percentage: percentage };
  });

  return { ...rawAreaData, candidates: candidateData };
};
