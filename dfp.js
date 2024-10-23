const fs = require('fs');

function swapColumns(line, delimiter = ';') { //Refactor this to one line in future
  let elements = line.split(delimiter);
  let reversedElements = [elements[1], elements[0]];  // .reverse() ?
  return reversedElements.join(delimiter);
}

function limitReview(line, delimiter = ';') { //Review must be the SECOND column, Switch to limitString?, or simply use .slice(0,20)? no function?
  let elements = line.split(delimiter);
  let trimmedReview = [elements[0],elements[1].slice(0,20)];
  return trimmedReview.join(delimiter);
}

function removeExistingOutputFile(outputFile) {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

function parseFile (indata, outdata, delimiter = ';') {
  if (!fs.existsSync(indata)) {
    return -1;

  } else {
    removeExistingOutputFile(outdata);
    const data = fs.readFileSync(indata, 'utf-8');
    const lines = data.split(/\n/);
    for (let line of lines) {

    }
  }

  //Ignore first row of data i.e. let i=1
}

// Testing

// let lineString = 'abcdefghijklmnopqrstuvwxyz;positive';
// lineString = swapColumns(lineString)
// console.log(swapColumns(lineString))

// lineString = limitReview(lineString)
// console.log(limitReview(lineString))
parseFile('testdata.csv', 'outputtest.csv')


// Leave this code here for the automated tests
module.exports = {
  parseFile,
}