const pairElement = (str) => {
  let pairchar = []
  for(let i = 0;i<str.length;i++){
    let char = str[i];
    let pair = '';
    if(char === 'A'){
      pair = 'T'
    }
    else if(char === 'T'){
      pair = 'A'
    }
    else if(char === 'C'){
      pair = 'G'
    }
    else{
      pair = 'C'
    }
    pairchar.push([char,pair])
  }
  return pairchar
}
console.log(pairElement("ATCGA"))