function frankenSplice(arr1,arr2,index){
  let result = arr2.slice();
  let newArray = arr1.slice();
  result.splice(index,0,...newArray)
  return result

}
console.log(frankenSplice([1, 2, 3], [4, 5], 1))
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))