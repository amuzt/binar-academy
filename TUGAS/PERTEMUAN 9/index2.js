const fs = require('fs');


//create new file
//let teks = 'This is new file'
//fs.writeFile('newfile.txt', teks, (err) => {
//  if (err) throw err;
//  console.log('Succesfully created new file')
//});
//

//read file that we've created at the previous code
//fs.readFile(__dirname + '/newfile.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//  console.log(data);
//});

//console.log('test')

//TUGAS
// create directory
//let fs = require('fs');
//let dir = './ana';
//  fs.mkdirSync(dir);

// create file in directory

let teks = 'This is new file'
fs.writeFile('./ana/newfile.txt', teks, (err) => {
    if (err) throw err;
    console.log('Succesfully created new file')
});




//var fs = require('fs');
//var dir = './tmp';

//if (!fs.existsSync(dir)){
//   fs.mkdirSync(dir);
//}