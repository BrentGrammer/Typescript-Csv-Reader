import { MatchData } from './MatchData';

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
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
