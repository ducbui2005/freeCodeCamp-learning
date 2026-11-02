function fearNotLetter(str){
  let fullHD = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 1;i<str.length;i++){
    if(fullHD.indexOf(str[i]) !== fullHD.indexOf(str[i-1])+1){
      return fullHD[fullHD.indexOf(str[i-1])+1]
    }
  }
}
console.log(fearNotLetter("bcdf"))