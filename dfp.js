const fs = require('fs');

// Swap 2 columns in a string, separated by a delimiter
function swapColumns(line, delimiter = ';') {
  return line.split(delimiter).reverse().join(delimiter);
}

// Trim and limit the review to 20 characters
function limitReview(line, delimiter = ';') { 
  let elements = line.split(delimiter);
  let trimmedReview = [elements[0].trim(),elements[1].trim().slice(0,20)];
  return trimmedReview.join(delimiter);
}

function parseFile (indata, outdata, delimiter = ';') {
  if (!fs.existsSync(indata)) {
    return -1;

  } else {
    // Remove existing output file
    if (fs.existsSync(outputFile)) {
      fs.unlinkSync(outputFile);
    }
    const data = fs.readFileSync(indata, 'utf-8');
    const lines = data.split(/\n/);
    let i = 0, records = 0;
    for (let line of lines) {
      if (i > 0) {
        fs.appendFileSync(outdata, limitReview(swapColumns(line,delimiter), delimiter)+'\n');
        records++;
      }
      i++;
    }

    lines.forEach((line, rowIndex) => {
      if(rowIndex > 0){
      fs.appendFileSync(outdata, limitReview(swapColumns(line,delimiter), delimiter)+'\n');
      }
    })
    return lines.length-1;
  }
}

// Leave this code here for the automated tests
module.exports = {
  parseFile,
}