const largestOfAll = (arr) => {
  let result = [];
  for(let i = 0;i<arr.length;i++){
    let max = arr[i][0];
    for(let j = 0;j<arr.length;j++){
      if(arr[i][j]>max){
        max = arr[i][j];
      }
    }
    result.push(max)
  }
  return result;
}
console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))