const fs = require('fs');

function swapColumns(line, delimiter = ';') { //Refactor this to one line in future
  let elements = line.split(delimiter);
  let reversedElements = [elements[1], elements[0]];  // .reverse() ?
  return reversedElements.join(delimiter);
}

function limitReview(line, delimiter = ';') { //Review must be the SECOND column, Switch to limitString?
  let elements = line.split(delimiter);
  let trimmedReview = [elements[0],elements[1].slice(0,20)];
  return trimmedReview.join(delimiter);
}

function parseFile (indata, outdata, delimiter = ';') {
  // IF STATEMENT TO CHECK IF INDATA EXISTS
}

// Testing

let lineString = 'abcdefghijklmnopqrstuvwxyz;positive';
lineString = swapColumns(lineString)
console.log(swapColumns(lineString))

lineString = limitReview(lineString)
console.log(limitReview(lineString))



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}