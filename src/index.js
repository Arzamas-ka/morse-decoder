const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let strToArr = expr.split("");

  let arrEncodedLetters = [];
  for (let i = 0; i < strToArr.length; i += 10) {
    arrEncodedLetters.push(strToArr.slice(i, i + 10));
  }
//   console.log(arrEncodedLetters);

  const decodedWord = arrEncodedLetters
    .map(encodedLetter => {
      if (encodedLetter[0] === "*") {
        return " ";
      }

      let morseLetter = "";

      for (let i = 0; i < encodedLetter.length; i += 2) {
        if (encodedLetter[i] === "1" && encodedLetter[i + 1] === "0") {
          morseLetter += ".";
        } else if (encodedLetter[i] === "1" && encodedLetter[i + 1] === "1") {
          morseLetter += "-";
        }
      }
      
    //   console.log(morseLetter);
      return morseLetter;
    })
    .map(morseLetter => {
      if (!MORSE_TABLE[morseLetter]) {
        return " ";
      }
      return MORSE_TABLE[morseLetter];
    })
    .join("");
  
    // console.log(decodedWord);  
    return decodedWord;
}

module.exports = {
  decode
};
