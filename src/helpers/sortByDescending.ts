import { RawCandidateData } from "../types/types";

export const sortByDescending = (candidates: RawCandidateData[]) => {
  return [...candidates].sort((a, b) => b.votes - a.votes);
};
