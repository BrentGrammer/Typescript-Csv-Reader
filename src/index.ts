import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

/**
 * Note: By convention, you do not export anything out of the index.ts file
 * You can move things to separate files and export them there.
 *
 * The commented out code is before the use of static methods which can be useful for making the code less verbose.
 * The static methods return a new instance of the class they are defined in and also create instances of the argument objects
 * referenced so that is all abstracted away by the static method.
 */
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);

// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   //new ConsoleReport()
//   new HtmlReport()
// );

// This example uses a static method to make the code less verbose so you don't have to create various instances
Summary.winsAnalysisWithHtmlReport('Man United');

//summary.buildAndPrintReport(matchReader.matches);
