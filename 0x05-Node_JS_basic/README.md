### 0x05. NodeJS Basics

**Back-end | JavaScript | ES6 | NodeJS | ExpressJS**  
**By: Johann Kerbrat, Engineering Manager at Uber Works**  
**Weight: 1**  
**Project Duration: Feb 26, 2024 4:00 AM - Feb 28, 2024 4:00 AM**  
**Checker Release: Feb 26, 2024 4:00 PM**  
**Auto Review: Deadline**

---

### Resources
Read or watch:

- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API doc](https://nodejs.org/dist/latest-v14.x/docs/api/process.html)
- [Child process](https://nodejs.org/dist/latest-v14.x/docs/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

### Learning Objectives
Upon completion of this project, you should be able to explain the following concepts without assistance:

- Running JavaScript using NodeJS
- Using NodeJS modules
- Utilizing specific NodeJS modules to read files
- Accessing command-line arguments and the environment using process
- Creating a small HTTP server using NodeJS
- Creating a small HTTP server using ExpressJS
- Creating advanced routes with ExpressJS
- Utilizing ES6 with NodeJS using Babel-node
- Developing faster with Nodemon

### Requirements
- **Allowed Editors:** vi, vim, emacs, Visual Studio Code
- **Operating System:** Ubuntu 18.04 LTS
- **Node Version:** 12.x.x
- **Code Style:** ESLint
- **Testing Framework:** Jest
- **Test Command:** `npm run test`
- **Full Test Command:** `npm run full-test`
- **Dependencies Installation:** `npm install`
- **File Extensions:** `.js`
- **Function/Class Export:** `module.exports = functionName;`

### Provided Files
- **database.csv:** Contains data in CSV format.
- **package.json:** Contains project metadata and dependencies.
- **babel.config.js:** Babel configuration file.
- **.eslintrc.js:** ESLint configuration file.

### Tasks
1. **Executing basic JavaScript with NodeJS**
   - File: `0-console.js`

2. **Using Process stdin**
   - File: `1-stdin.js`

3. **Reading a file synchronously with NodeJS**
   - File: `2-read_file.js`

4. **Reading a file asynchronously with NodeJS**
   - File: `3-read_file_async.js`

5. **Create a small HTTP server using Node's HTTP module**
   - File: `4-http.js`

6. **Create a more complex HTTP server using Node's HTTP module**
   - File: `5-http.js`

7. **Create a small HTTP server using Express**
   - File: `6-http_express.js`

8. **Create a more complex HTTP server using Express**
   - Files: `full_server/utils.js`, `full_server/controllers/AppController.js`, `full_server/controllers/StudentsController.js`, `full_server/routes/index.js`, `full_server/server.js`

### How to Run
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd 0x05-Node_JS_basic`
3. Install dependencies: `npm install`
4. Run individual tasks/tests: `npm run test <file-name>.js` or `npm run test`
5. Run full test suite: `npm run full-test`
6. Start the server: `npm run dev` (For the last task)

### Tips
- Utilize asynchronous callbacks in NodeJS to avoid blocking threads.
- Export the Express app at the end of `server.js`.
- Ensure correct handling of command-line arguments, especially for file paths.

---

