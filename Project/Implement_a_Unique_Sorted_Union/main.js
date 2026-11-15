function uniteUnique(...arr){
  let newArr = [];
  for(let i = 0;i<arr.length;i++){
    for(let  j = 0;j<arr[i].length;j++){
      let current = arr[i][j];
      let found = false;
      for(let k = 0;k<newArr.length;k++){
        if(current === newArr[k]){
          found = true;
        }
      }
      if(found === false){
        newArr.push(current)
      }
    }
  }
  return newArr
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))