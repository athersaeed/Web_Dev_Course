/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('syedathersaeed');

// Insert a few documents into the sales collection.
db.courses.insertMany([
  { "name": "webdev", "price": 200, "instructor": "ather" },
  { "name": "python_basics", "price": 150, "instructor": "umar" },
  { "name": "react_frontend", "price": 220, "instructor": "ather" },
  { "name": "nodejs_api", "price": 250, "instructor": "hamza" },
  { "name": "fullstack_mern", "price": 400, "instructor": "ather" },
  { "name": "ui_ux_design", "price": 180, "instructor": "fatima" },
  { "name": "database_fundamentals", "price": 210, "instructor": "saad" },
  { "name": "devops_intro", "price": 260, "instructor": "zain" },
  { "name": "typescript_advanced", "price": 230, "instructor": "ather" }
])

/
// Print a message to the output window.
console.log(`Done inserting courses.`);

