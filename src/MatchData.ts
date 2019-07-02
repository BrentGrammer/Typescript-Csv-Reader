import { MatchResult } from './MatchResult';

// these are the types of data in order in a csv row:
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
