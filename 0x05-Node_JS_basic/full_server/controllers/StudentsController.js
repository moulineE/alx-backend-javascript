import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(path)
      .then((nameByFieldDict) => {
        let output = 'This is the list of our students\n';
        for (const field in nameByFieldDict) {
          if (Object.prototype.hasOwnProperty.call(nameByFieldDict, field)) {
            output += `Number of students in ${field}: ${nameByFieldDict[field].length}. List: ${nameByFieldDict[field].join(', ')}\n`;
          }
        }
        output = output.replace(/\n$/, '');
        response.status(200).send(output);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;
    const validator = ['CS', 'SWE'];

    if (!validator.includes(major)) {
      response
        .status(500)
        .send('Major parameter must be CS or SWE');
    }
    readDatabase(path)
      .then((nameByFieldDict) => {
        let output = '';
        if (Object.keys(nameByFieldDict).includes(major)) {
          output += `List: ${nameByFieldDict[major].join(', ')}`;
        }
        response.status(200).send(output);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

module.exports = StudentsController;
