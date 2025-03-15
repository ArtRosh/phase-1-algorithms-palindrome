function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here

  split the word into an array of characters
  reverse the array
  join the array back into a string
  compare the original word to the reversed word
  return the result
*/



/*
  Add written explanation of your solution here

  I used the split, reverse, and join methods to reverse the word.
  I then compared the original word to the reversed word.
  If they are the same, the word is a palindrome.
  If they are different, the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
