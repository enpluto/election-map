export interface ElectionData {
  [area: string]: RawAreaData;
}

export interface RawAreaData {
  candidates: RawCandidateData[];
  validVotes: number;
  invalidVotes: number;
  registeredVoters: number;
}

export interface AreaData extends RawAreaData {
  candidates: CandidateData[];
}

export interface RawCandidateData {
  name: string;
  party: string;
  votes: number;
}

export interface CandidateData extends RawCandidateData {
  percentage: string;
}
