// HOW TO CREATE A NODEJS PROJECT USING NPM
// 1. Open the terminal and navigate to the desired directory
// 2. Run the command `npm init` to create a new Node.js project
// 3. Follow the prompts to fill in the project details
// 4. A `package.json` file will be created in the directory
// 5. You can now install packages using `npm install <package-name>`

// var generateName = require("sillyname");
import generateName from "sillyname";
var sillyname = generateName();
console.log(sillyname);

import { randomSuperhero } from "superheroes";
console.log(randomSuperhero());
