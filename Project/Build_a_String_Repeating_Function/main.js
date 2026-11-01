const repeatStringNumTimes = (str,num) => {
  if(num<=0){
    return ``
  }
  else{
    let i = 0;
    let result = ""
    while(i<num){
      result += str;
      i++;
    }
    return result
  }
  
}
console.log(repeatStringNumTimes("abc", 3))