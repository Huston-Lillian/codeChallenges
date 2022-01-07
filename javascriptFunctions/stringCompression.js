function stringCompression(originalWord) {
  let curChar = originalWord[0];
  let newWord = "";
  let repeated = 0;
  for (let i = 0; i <= originalWord.length; i++) {
    let nextChar = originalWord[i];
    if (curChar === nextChar) {
      repeated = repeated + 1;
    } else {
      newWord = newWord + curChar + repeated;
      repeated = 1;
      curChar = nextChar;
    }
  }
  if (newWord.length < originalWord.length) {
    console.log(newWord);
    return newWord;
  } else {
    console.log(originalWord);
    return originalWord;
  }
}

module.exports = stringCompression;

stringCompression("abbcbda");
