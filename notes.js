console.log('starting notes.js');

module.exports.age = 29;

// module.exports.getDetails = () => {
//   var contact = {
//     name: 'sam',
//     age: 29
//   }
//   return contact;
// }

module.exports.addNote = () => {
  console.log('Add Notes')
  return 'New note';
};

module.exports.add = (a,b) => a+b;
