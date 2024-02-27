const fs = require('fs');

const data = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      resolve(data);
    }
  });
});

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

const countStudents = (path) => data(path)
  .then((file) => {
    const arr = file.split('\n').filter((item) => item !== '');
    const fieldsDict = getField(arr);
    const fields = Object.keys(fieldsDict);
    const nameByFieldDict = getNameList(arr, fields);
    console.log(`Number of students: ${parseInt(arr.length, 10) - 1}`);
    for (const field of fields) {
      console.log(`Number of students in ${field}: ${fieldsDict[field]}. List: ${nameByFieldDict[field].join(', ')}`);
    }
  });

module.exports = countStudents;
