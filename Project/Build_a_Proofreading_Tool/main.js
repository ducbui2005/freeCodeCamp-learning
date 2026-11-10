function isPalindrome(word) {
  let reverse = [];
  for(let i = word.length-1 ;i>=0;i--){
    reverse.push(word[i]);
  }
  let ischecked = false;
  for(let i = 0;i<reverse.length;i++){
    if(reverse[i].toLowerCase() === word[i].toLowerCase()){
      ischecked = true;
    }
    return ischecked; 
  }
}


const findPalindromeBreaks = (word) => {
    let reverse = [];
    for(let i = 0;i<word.length;i++){
       if(isPalindrome(word[i]) === false){
        reverse.push(i)
       }
    }
    return reverse
}
console.log(findPalindromeBreaks(["the", "cat", "sat", "the", "cat"]))

const findRepeatedPhrases = (arr,num) =>{
  let result = []
    for(let i = 0;i<=arr.length-num;i++){
      let found = false;
     for(let j = 0;j<=arr.length-num;j++){
      if(i===j){
        continue;
      }
      let same = true
      for(let k = 0;k<num;k++){
        if(arr[i+k]!==arr[j+k]){
          same = false;
          break;
        }
      }
      if(same){
        found=true;
        break;
      }
     }
       if (found) {
          result.push(i);
        } 
    }
 return result
}
console.log(findRepeatedPhrases (["the", "cat", "sat", "the", "cat"],2))

const analyzeTexts = (texts,phraseLength) => {
  if(texts.length===0){
    return []
  }
  const result = [];
  for(let i = 0;i<texts.length;i++){
    const repeatedPhrases = findRepeatedPhrases(texts[i], phraseLength);
    const palindromeBreaks = findPalindromeBreaks(texts[i]);
    result.push({
      repeatedPhrases,
      palindromeBreaks
    })
  }
  return result
}
console.log(analyzeTexts(["the", "cat", "sat", "the", "cat"],2))