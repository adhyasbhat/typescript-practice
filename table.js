"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var fs = require("fs");
function printTable(number, tableSize) {
    var table = [];
    var result;
    var row;
    for (var i = 1; i <= tableSize; i++) {
        result = number * i;
        row = "".concat(number, " x ").concat(i, " = ").concat(result);
        table.push(row);
    }
    console.log("Table of ".concat(number, ":"));
    console.log(table.join('\n'));
    var outputFilename = 'table_output.txt';
    var outputData = table.join('\n');
    fs.writeFile(outputFilename, outputData, function (err) {
        if (err) {
            console.error('Error writing to file:', err);
        }
        else {
            console.log("Table output written to ".concat(outputFilename));
        }
    });
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter a number: ', function (input) {
    var inputNumber = parseInt(input, 10);
    var tableSize = 10;
    printTable(inputNumber, tableSize);
    rl.close();
});
