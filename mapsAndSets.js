new Set([1, 1, 2, 2, 3, 4]);
//{1,2,3,4}

//-----------------------

[...new Set("referee")].join("");
//"ref"

//--------------------------

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//0: {Array(3) => true}
//1: {Array(3) => false}

//-----------------------------

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => {
  arr.length != new set(arr).size;
};

//------------------------------
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
  const vowels = "aeiou";
  let mapVowels = new Map();
  str
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (vowels.includes(letter)) {
        if (!mapVowels.has(letter)) {
          mapVowels.set(letter, 1);
        } else {
          mapVowels.set(letter, mapVowels.get(letter) + 1);
        }
      }
    });
  return mapVowels;
};
