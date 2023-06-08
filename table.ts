import * as readline from 'readline';
import * as fs from 'fs';

function printTable(number: number, tableSize: number): void {
  const table: string[] = [];
  let result : any
  let row : any

  for (let i = 1; i <= tableSize; i++) {
    result = number * i;
    row = `${number} x ${i} = ${result}`;
    table.push(row);
  }

  console.log(`Table of ${number}:`);
  console.log(table.join('\n'));

  const outputFilename = 'table_output.txt';
  const outputData = table.join('\n');

  fs.writeFile(outputFilename, outputData, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Table output written to ${outputFilename}`);
    }
  });
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', (input) => {
  const inputNumber = parseInt(input, 10);
  const tableSize = 10;

  printTable(inputNumber, tableSize);

  rl.close();
});
