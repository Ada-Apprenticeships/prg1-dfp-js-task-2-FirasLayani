const fs = require('fs');
const { parse } = require('path');

function swapColumns(line, delimiter = ';') {
  return line.split(delimiter).reverse().join(delimiter)
}

function limitReview(line, delimiter = ';') { //Review must be the SECOND column, Switch to limitString?, or simply use .slice(0,20)? no function?
  let elements = line.split(delimiter);
  let trimmedReview = [elements[0].trim(),elements[1].trim().slice(0,20)];
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
    let i = 0, records = 0;
    for (let line of lines) {
      if (i > 0) {
        fs.appendFileSync(outdata, limitReview(swapColumns(line,delimiter), delimiter)+'\n')
        records++;
      }
      i++;
    }
    return records;
  }
}

// Testing - REMOVE IN FINAL VERSION

// console.log(parseFile('testdata.csv', 'outputtest.csv', ','))
// console.log(parseFile('datafile.csv', 'outputFile.csv'))
// console.log(parseFile('testing/testdata_5.csv', 'testdata_1_commaoutput.csv'))

// Leave this code here for the automated tests
module.exports = {
  parseFile,
}