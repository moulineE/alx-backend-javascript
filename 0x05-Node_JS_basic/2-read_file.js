const fs = require('fs');

const data = (path) => {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const getField = (arr) => {
  const fieldlist = [];
  const counts = {};

  for (let i = 1; i < arr.length; i += 1) {
    fieldlist.push(arr[i].split(',')[3]);
  }
  for (const item of fieldlist) {
    if (item in counts) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }
  return counts;
};

const getNameList = (arr, fields) => {
  const dict = {};
  for (const field of fields) {
    dict[field] = [];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i].split(',')[3] === field) {
        dict[field].push(arr[i].split(',')[0]);
      }
    }
  }
  return dict;
};

const countStudents = (path) => {
  const file = data(path);
  const arr = file.split('\n').filter((item) => item !== '');
  const fieldsDict = getField(arr);
  const fields = Object.keys(fieldsDict);
  const nameByFieldDict = getNameList(arr, fields);
  console.log(`Number of students: ${parseInt(arr.length, 10) - 1}`);
  for (const field of fields) {
    console.log(`Number of students in ${field}: ${fieldsDict[field]}. List: ${nameByFieldDict[field].join(', ')}`);
  }
};

module.exports = countStudents;
