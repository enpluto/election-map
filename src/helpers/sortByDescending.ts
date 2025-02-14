interface CandidateType {
  name: string;
  party: string;
  votes: number;
}

export const sortByDescending = (candidates: CandidateType[]) => {
  return [...candidates].sort((a, b) => b.votes - a.votes);
};
