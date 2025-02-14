export interface ElectionDataType {
  [area: string]: FilteredDataType;
}

export interface FilteredDataType {
  candidates: {
    name: string;
    party: string;
    votes: number;
  }[];
  validVotes: number;
  invalidVotes: number;
  registeredVoters: number;
}
