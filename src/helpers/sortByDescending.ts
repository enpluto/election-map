import { CandidateDataType } from "../types/types";

export const sortByDescending = (candidates: CandidateDataType[]) => {
  return [...candidates].sort((a, b) => b.votes - a.votes);
};
