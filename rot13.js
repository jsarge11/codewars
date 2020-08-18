const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function getLetter13(index) {
    const plus13 = index + 13;
    if(plus13 > 25)  {
        return Math.abs(26 - plus13);
    } else {
        return plus13;
    }
}

function rot13(message){
  const newWord = [];
  for(let i = 0; i < message.length; i++) {
    const letter = message[i];
    const isLowerCase  = letter.toLowerCase() === letter;
    if (isNaN(letter) && letter.match(/[a-zA-Z]/)) {
      let index = alphabet.indexOf(letter.toLowerCase());
      const newLetter = alphabet[getLetter13(index)];
      if (isLowerCase) {
          newWord.push(newLetter.toLowerCase());
      } else {
          newWord.push(newLetter.toUpperCase());
      }
    } else {
      newWord.push(letter);
    }
  }

  return newWord.join('');
}