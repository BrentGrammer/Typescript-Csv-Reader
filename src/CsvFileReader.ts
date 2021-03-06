import fs from 'fs';

// this produces a 2-D array - each row will be an array of the words inside an outer array
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        // this tells the method what type of data content to find in the file (text encoded with utf-8)
        // If no encoding is provided, then a Buffer containing the raw file content will be returned
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
