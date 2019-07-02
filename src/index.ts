import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

/**
 * Note: By convention, you do not export anything out of the index.ts file
 * You can move things to separate files and export them there.
 */
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
