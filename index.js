// Code your solutions in this file

// function writeCards(names, events) {
//   let messages = [];
//   for (let i = 0; i < names.length; i++) {
//     messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
//   }
//   return messages;
// }

// function countDown(positiveNumbers) {
//   while (positiveNumbers >= 0) {
//     console.log(positiveNumbers);
//     positiveNumbers--;
//   }
// }

function writeCards(names, events) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countDown(positiveNumbers) {
  while (positiveNumbers >= 0) {
    console.log(positiveNumbers);
    positiveNumbers--;
  }
}
