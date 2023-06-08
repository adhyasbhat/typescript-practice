import * as fs from 'fs';

let person : any = [{
    name : 'aadhya'
},
{
    age : 21
},
{
    occupation : 'software engineer'
},
{
    address : 'bangalore'
}]

const jsonFilename = 'person_data.json';
const jsonData = JSON.stringify(person);

fs.writeFile(jsonFilename, jsonData, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`Person data written to ${jsonFilename}`);
  }
});

console.log(person);
