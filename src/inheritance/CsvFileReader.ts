// import fs from 'fs';

// // Generics are used here (pass in the type in <>) to allow for different formats and types in the csv rows
// // to make the class more reusable
// export abstract class CsvFileReader<T> {
//   data: T[] = [];

//   constructor(public filename: string) {}

//   abstract mapRow(row: string[]): T;

//   read(): void {
//     this.data = fs
//       .readFileSync(this.filename, {
//         // this tells the method what type of data content to find in the file (text encoded with utf-8)
//         // If no encoding is provided, then a Buffer containing the raw file content will be returned
//         encoding: 'utf-8'
//       })
//       .split('\n')
//       .map((row: string): string[] => row.split(','))
//       .map(this.mapRow);
//   }
// }
