let string = "The quick brown fox jumped superduper really high";

let splitString = string.split(" ");

function findLongestWord(splitString) {
  let longestWord = "";
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longestWord.length) {
      longestWord = splitString[i];
    }
  }
  console.log("longest Word = " + longestWord);
  return longestWord;
}

function findWordLength(splitString) {
  for (let word of splitString) {
    console.log(word + " = " + word.length + " letters");
  }
}

findWordLength(splitString);
findLongestWord(splitString);
