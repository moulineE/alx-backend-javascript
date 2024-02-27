const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const DB = process.argv.length > 2 ? process.argv[2] : '';

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
    let output = `Number of students: ${parseInt(arr.length, 10) - 1}\n`;
    for (const field of fields) {
      output += `Number of students in ${field}: ${fieldsDict[field]}. List: ${nameByFieldDict[field].join(', ')}\n`;
    }
    return output;
  });

module.exports = countStudents;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.write(Buffer.from(responseText));
  } else if (req.url === '/students') {
    countStudents(DB)
      .then((data) => {
        const responseText = `This is the list of our students\n${data}`.trim();
        res.statusCode = 200;
        res.setHeader('Content-Length', responseText.length);
        res.setHeader('Content-Type', 'text/plain');
        res.write(Buffer.from(responseText));
      })
      .catch((err) => {
        const responseText = `This is the list of our students\n${err.message}`;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      });
  }
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
