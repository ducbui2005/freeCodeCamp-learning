const truncateString = (str,num) => {
  if(str.length > num){
    let slice = str.slice(0,num);
    return slice + "...";
  }
  else{
    return str;
  }
}
console.log(truncateString("A-", 1))