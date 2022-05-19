






// create a function that takes an string input as argument

function reverseString(str) {
    let o = '';
    for (let i = str.length - 1; i >= 0; i--)
      o += str[i];
    return o;
}
console.log(reverseString("ted"))


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution



