// Convert into sentence case

let msg: string = "weLcOme tO tyPeScriPt";
console.log("Row Case : " + msg);

let sentenceCase: string = "";
let words: string[] = msg.split(" ");

for (let i: number = 0; i < words.length; i++) {
  let word: string = words[i];

  let firstChar: string = word.charAt(0);
  let restPart: string = word.substring(1);
  sentenceCase = sentenceCase + firstChar.toUpperCase();
  sentenceCase = sentenceCase + restPart.toLowerCase() + " ";
}

console.log("Sentence Case : " + sentenceCase.trim());
