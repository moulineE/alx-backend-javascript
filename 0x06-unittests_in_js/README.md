# 0x06. Unittests in JS

## Overview

This project focuses on learning unit testing in JavaScript using Mocha, Chai, and Sinon libraries. By completing this project, you will gain a solid understanding of how to write and execute test suites, use different assertion libraries, handle long test suites, and utilize spies and stubs effectively. The project covers various aspects of unit testing, including testing asynchronous functions and integrating tests with a small Node.js server.

## Table of Contents

1. [Requirements](#requirements)
2. [Tasks](#tasks)
    - [Basic test with Mocha and Node assertion library](#task-0)
    - [Combining descriptions](#task-1)
    - [Basic test using Chai assertion library](#task-2)
    - [Spies](#task-3)
    - [Stubs](#task-4)
    - [Hooks](#task-5)
    - [Async tests with done](#task-6)
    - [Skip](#task-7)
    - [Basic Integration testing](#task-8)
    - [Regex integration testing](#task-9)
    - [Deep equality & Post integration testing](#task-10)
3. [Resources](#resources)
4. [Learning Objectives](#learning-objectives)

## Requirements <a name="requirements"></a>

- All code execution should be on Ubuntu 18.04 using Node 12.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- Code files should use the `.js` extension.
- Running tests with `npm run test *.test.js` should result in all tests passing without errors or warnings.

## Tasks <a name="tasks"></a>

### 0. Basic test with Mocha and Node assertion library <a name="task-0"></a>

- **Description:** Set up Mocha for testing and write basic tests using Node's assert library.

- **File:** `0-calcul.js`, `0-calcul.test.js`

### 1. Combining descriptions <a name="task-1"></a>

- **Description:** Enhance the previous function to support different types of operations and write test cases accordingly.

- **File:** `1-calcul.js`, `1-calcul.test.js`

### 2. Basic test using Chai assertion library <a name="task-2"></a>

- **Description:** Transition from Node's assert library to using Chai for more readable tests.

- **File:** `2-calcul_chai.js`, `2-calcul_chai.test.js`

### 3. Spies <a name="task-3"></a>

- **Description:** Learn how to use Sinon to create spies for testing function calls.

- **File:** `utils.js`, `3-payment.js`, `3-payment.test.js`

### 4. Stubs <a name="task-4"></a>

- **Description:** Use Sinon to create stubs for controlling function behavior and speed up testing.

- **File:** `4-payment.js`, `4-payment.test.js`

### 5. Hooks <a name="task-5"></a>

- **Description:** Utilize Mocha hooks to execute functions before or after test suites, and maintain test integrity.

- **File:** `5-payment.js`, `5-payment.test.js`

### 6. Async tests with done <a name="task-6"></a>

- **Description:** Learn to handle asynchronous testing in Mocha using the `done` callback.

- **File:** `6-payment_token.js`, `6-payment_token.test.js`

### 7. Skip <a name="task-7"></a>

- **Description:** Understand the importance of skipping tests and how to implement it effectively.

- **File:** `7-skip.test.js`

### 8. Basic Integration testing <a name="task-8"></a>

- **Description:** Perform basic integration testing using Mocha and request module to test a small Node.js server.

- **File:** `8-api/package.json`, `8-api/api.js`, `8-api/api.test.js`

### 9. Regex integration testing <a name="task-9"></a>

- **Description:** Extend the integration testing to include regular expression-based routing and validation.

- **File:** `9-api/api.js`, `9-api/api.test.js`, `9-api/package.json`

### 10. Deep equality & Post integration testing <a name="task-10"></a>

- **Description:** Apply deep equality comparisons for testing complex data structures and perform integration testing for POST requests.

- **File:** `10-api/api.js`, `10-api/api.test.js`, `10-api/package.json`

## Resources <a name="resources"></a>

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://dev.to/kwabenberko/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs-5h7l)

## Learning Objectives <a name="learning-objectives"></a>

By the end of this project, you are expected to be able to:

- Explain how to use Mocha to write a test suite.
- Utilize different assertion libraries (Node or Chai).
- Present long test suites effectively.
- Understand when and how to use spies and stubs.
- Use hooks and understand when to apply them.
- Perform unit testing with asynchronous functions.
- Write integration tests with a small Node server.