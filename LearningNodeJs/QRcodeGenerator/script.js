// use inquirer npm package to get user input
// use qr-image to make a qr for user given url
// create and use a textfile to save the user data using
// generate a qr which will direct us to instagram using "https://instagram.com"

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Type in you URL: ", name: "URL" }])

  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("QR.png"));
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
