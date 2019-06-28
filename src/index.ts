import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

/**
 * Note: By convention, you do not export anything out of the index.ts file
 * You can move things to separate files and export them there.
 */

const reader = new MatchReader('football.csv');

reader.read();

console.log(reader.data[0][0]);

let manUnitedWins = 0;

const printResult = (): MatchResult => {
  return MatchResult.HomeWin;
};

// loop through row arrays and grab index of home and away teams to match a team where Home and Away wins correspond with the team
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
