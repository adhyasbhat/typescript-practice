"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var person = [{
        name: 'aadhya'
    },
    {
        age: 21
    },
    {
        occupation: 'software engineer'
    },
    {
        address: 'bangalore'
    }];
var jsonFilename = 'person_data.json';
var jsonData = JSON.stringify(person);
fs.writeFile(jsonFilename, jsonData, function (err) {
    if (err) {
        console.error('Error writing to file:', err);
    }
    else {
        console.log("Person data written to ".concat(jsonFilename));
    }
});
console.log(person);
