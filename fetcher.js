const fs = require('fs');
const request = require('request');
const arg = process.argv;
const fileName = arg[3];
//arg.slice(1);
console.log(arg[3]);
let fn1 = (error, response, body) => {
  console.log(`file name ${fileName}`);
  fs.writeFile(fileName, error,(err) => {
    if (err) throw err;
  });
  fs.writeFile(fileName, response && response.statusCode,(err) => {
    if (err) throw err;
  }); 
  fs.writeFile(fileName, body,(err) => {
    if (err) throw err;
    
  }); // Print the HTML for the Google homepage.
  console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
  console.log(response);
}
request(arg[2],fn1);