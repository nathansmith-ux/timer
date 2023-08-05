/*
Note: My beeping wasn't working for some reason (I have an M2 Mac OS) so I used commas to distinguish the beeps!
*/

// Accepting user input as an array
const timers = process.argv.slice(2);

// Checks if the array is empty, if true then it exits
if (timers === "") {
  process.exit();
}

// Looping through each input
for (let time of timers) {
  // Converting each element into a number
  let timeNum = Number(time);

  // If array element is a string or less than 0 it skips it
  if (isNaN(timeNum) || timeNum < 0) {
    continue;
  }
  
  setTimeout(() => {
    console.log(timeNum, ","); // Added input to see it work asynchronously
  }, time * 1000); // Multiply time by 1000 to convert input to seconds
}