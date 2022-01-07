// function test() {
//   console.log("test");
// }
// test();

function isAnagram(word) {
  var size = word.length - 1;

  if (word.length % 2 === 0) {
    for (let i = 0; i < size; i++) {
      if (word[i] === word[size]) {
        console.log(word[i] + " = " + word[size]);
        size = size - 1;
      } else return "Not an anagram";
    }
    return "Is an anagram";
  } else if (word.length % 2 != 0) {
    for (let i = 0; i <= size; i++) {
      if (word[i] === word[size]) {
        console.log(word[i] + " = " + word[size]);
        size = size - 1;
      } else return "Not an anagram";
    }
    return "Is an anagram";
  }
}
module.exports = isAnagram;

// console.log(isAnagram("anima"));
