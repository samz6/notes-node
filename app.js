console.log('starting app.js');

const fs = require('fs')
const os = require('os');
const notes = require('./notes.js')


var user = os.userInfo();

fs.appendFile('greeting.txt',`Hello ${user.username}! You are ${notes.age} years old.`,(err)=> { if(err){console.log(err);}});

// console.log(notes.getDetails());
// var user = notes.getDetails();
// console.log(`Hello! I am ${user.name} and I am ${user.age}`);

console.log(notes.add(9,8));
