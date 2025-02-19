export interface ElectionDataType {
  [area: string]: FilteredDataType;
}

export interface FilteredDataType {
  candidates: CandidateDataType[];
  validVotes: number;
  invalidVotes: number;
  registeredVoters: number;
}

export interface CandidateDataType {
  name: string;
  party: string;
  votes: number;
  percentage: string;
}
