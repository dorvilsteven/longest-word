// Code By Steven Dorvil

const readLine = document.querySelector('#readLine');
const submitBtn = document.querySelector('#submit');
const display = document.querySelector('#word');

// function checks word and returns the length of the word
function check(wrd) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let numberOfLetters;
  // if word has punctuation 
  // ignore the punctuation and 
  // then get the length
  if (!!wrd.match(regex)) {
    const result = wrd.replace(regex, '');
    numberOfLetters = result.length;
  } else {
    // if no puncuation, then just get the length
    numberOfLetters = wrd.length;
  }
  // return length 
  return numberOfLetters;
}

function LongestWord(sen) { 
  // put each word as an element in an array 
  let words = sen.split(' ');
  // empty array to store the word lengths 
  let num = [];
  // get the length of each word 
  for (let i=0; i < words.length; i++) {
    num.push(check(words[i]));
  }
  // get the largest word length 
  const largest = Math.max(...num)
  // get the index of the largest length 
  let index = num.indexOf(largest);
  // assign the largest word to the returned variable 
  sen = words[index];
  // return the largest word 
  console.log(sen);
  return sen; 
}

submitBtn.addEventListener('click', function() {
  const winner = LongestWord(readLine.value);
  display.innerHTML = (winner);
});

