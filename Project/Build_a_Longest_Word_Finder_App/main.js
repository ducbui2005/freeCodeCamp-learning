function findLongestWordLength(sentence){
  let max = 0;
  let word = sentence.trim().split(' ');
  for(const char of word){
    if(char.length > max){
      max = char.length;
    }
  }
  return max
}
console.log(findLongestWordLength("May the force be with you"))