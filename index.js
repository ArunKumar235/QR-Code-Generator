//Use the inquirer npm package to get user input
//Use the qr-image npm package to generate qr-code from user input
//Use the native fs node module to create a text file to save user input

import inquirer from 'inquirer';

import qr from "qr-image";

import fs from "fs";

inquirer
  .prompt([{
        "message": "Type in your URL: ", 
        "name": "URL"
    },
  ])
  .then((answers) => {

        const url = answers.URL;
    
        var qr_png = qr.image(url, { type: 'png' });
    
        qr_png.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile("URL.txt", url, (err) =>{
            if(err) throw err;
            console.log("The file has been saved");
        });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });