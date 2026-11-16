function dropElements(arr,func){
  let result = []
  let found = false;
  for(let i = 0;i<arr.length;i++){
    if(found === false && func(arr[i])){
        found = true
    }
    if(found === true){
      result.push(arr[i])
    }
  }
  return result
}
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))