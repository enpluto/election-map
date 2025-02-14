export interface ElectionDataType {
  [area: string]: {
    candidates: {
      name: string;
      party: string;
      votes: number;
    }[];
    validVotes: number;
    invalidVotes: number;
    registeredVoters: number;
  };
}
