import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

/**
 * Classic Object Composition pattern:
 *
 * This is the general class that you pass in a reference to other objects that have methods with specific behavior.
 * The referenced classes implement the interfaces required (WinsAnalysis implements Analyzer, ConsoleReport implements OutputTarget)
 */
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  /**  using a static method allows for loading a formatted report without having to create instances of Summary and pass in instances
   * of the arguments.  It is a tool that can be used to make the code less verbose.
   * You can return an instance of the same class with the other argument instances already passed in.
   */

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
