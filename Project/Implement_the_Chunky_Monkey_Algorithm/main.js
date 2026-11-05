const chunkArrayInGroups = (arr,num) => {
  let result = [];
  for(let i = 0;i<arr.length;i+=num){
    let update = arr.slice(i,i+num);
    result.push(update) 
  }
  return result
}
console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))