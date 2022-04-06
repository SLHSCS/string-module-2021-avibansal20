
 /**
 * Returns an scrambled string.
 *
 * LetterScrambleFunction takes in a user inputted string, and shuffled each letter was given in order to create a secret scrambled word.
 *
 *
 * Returns all the letters in a string in alphabet order
 *
 * AlphabetFunction takes in a user inputted string and returns all the letters used in alphabet order.
 *
 *
 * Returns a string converted into ascii
 *
 * AsciiConvertFunction takes in a user inputted string and returns it converted into its ascii values.
 *
 *
 *  Returns a conversion of an array of ascii keys to binary
 *
 * AsciiToBinaryFunction takes in a user inputted ascii value and returns it converted into binary.
 *
 *
 * Returns a conversion of binary to ascii
 *
 * BinaryToAscii takes in a user inputted binary value and returns it converted to ascii.
 * BinaryToAsciiFunction takes in a user inputted binary value and returns it converted to ascii.
 *
 *
 * Returns a conversion of a string to its binary form
 *
 * StringToBinary takes in a user inputted string and converts it to its binary value.
 * StringToBinaryFunction takes in a user inputted string and converts it to its binary value.
 *
 *
 * Returns a true or false if the string inputted by the user is a legitimate sentence
 *
 * SentenceChecker takes in a user inputted string and checks if the string is a complete sentence or is not.
 *
 *
 * Returns the number of vowels in a string
 *
 * StringVowelChecker takes a user inputted sentence and counts the number of vowels that occur in the sentence.
 *
 *
 * Returns a string into snakecase form
 *
 * SnakeCaseCreator takes in a user inputted string and converts it to its snake case form.
 *
 *
* Returns the number of occurances of a word
 *
 * wordChecker takes in a user inputted string and a user inputted word and counts the number of occurances of that word inside the string and returns the number.
 *
 * @param {string} st
 * @returns
 * DO THIS AT THE END AND DONT FORGET
 */




 const myFunctions = {

    letterScrambleFunction: (st) => {
         return st.split('').sort(function(){return 0.5-Math.random()}).join('');
     },
 
 
    alphabetFunction: (st) => {
         var arr = st.split('');
         var sorted = arr.sort();
         return sorted.join('');
     },
 
 
    asciiConvertFunction: (st) =>{
        let charCodeArr = [];
         for(let i = 0; i < st.length; i++){
             let code = st.charCodeAt(i);
             charCodeArr.push(code);
         }
         return charCodeArr;
     },
 
 
    asciiToBinaryFunction: (st) =>{
         var result = "";
          for (var i = 0; i < st.length; i++) {
              var bin = st[i].charCodeAt().toString(2);
              result += Array(8 - bin.length + 1).join("0") + bin;
 
 
         }
 
 
         return result;
 
 
    },
     binaryToAscii: (st) =>{
         var result = "";
          var arr = st.match(/.{1,8}/g);
          for (var i = 0; i < arr.length; i++) {
              result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
          }
          return result;
 
 
    },
 
    stringToBinary: (st) =>{
         const s = st.toLowerCase();
         let res = '';
         for(let i = 0; i < s.length; i++){
             if(s[i].toLowerCase() === s[i].toUpperCase()){
                 res += s[i];
                continue;
         };
         if(s[i] > 'm'){
             res += 1;
         }
         else{
             res += 0;
         };
 
        };
        return res;
 
 
    },
 
 
    sentenceChecker: (st) =>{
          var first_char = st[0];
         var last_char = st[st.length - 1];
        return /[A-Z]/.test(first_char) && last_char == "."
     },
 
 
    stringVowelCounter: (st) =>{
            const count = str.match(/[aeiou]/gi).length;
            return count;
    },
 
 
    snakeCaseCreator: (st) =>{
     return st && st.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                        .map(s => s.toLowerCase()) 
                        .join('_'); 
    },
 
 
    containsWordFunction: (st, input) =>{
        var arr = st.split(" ");
        var num = 0;
        for(let i = 0; i<arr.length; i++){ 
            if(arr[i] = input){
                num++;
            }
        }
        return num;
    }
 }
 module.exports = myFunctions;
 
 