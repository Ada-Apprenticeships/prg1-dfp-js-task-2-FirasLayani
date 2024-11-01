const fs = require('fs');

// Swap two columns in a string, separated by a delimiter
function swapColumns(line, delimiter = ';') {
  return line.split(delimiter).reverse().join(delimiter);
}

// Trim and limit the review to 20 characters
function limitReview(line, delimiter = ';') {
  const elements = line.split(delimiter);
  const trimmedReview = [elements[0].trim(), elements[1].trim().slice(0, 20)];
  return trimmedReview.join(delimiter);
}

// Read in a file, swap columns, limit second column's length to 20 characters, and write the output to a file
function parseFile(indata, outdata, delimiter = ';') {
  // Check if input data exists
  if (!fs.existsSync(indata)) {
    return -1;
  }

  // Remove existing output file if it exists
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
  }

  const data = fs.readFileSync(indata, 'utf-8');
  // Remove header
  const lines = data.split(/\n/).slice(1);

  // Swap each row's columns and limit the review, then append to the output file
  lines.forEach(line => {
    fs.appendFileSync(outdata, limitReview(swapColumns(line, delimiter), delimiter) + '\n');
  });
  return lines.length - 1;
}

// Leave this code here for the automated tests
module.exports = {
  parseFile,
};
