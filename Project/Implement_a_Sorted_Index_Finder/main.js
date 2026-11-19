const getIndexToIns = (arr,num) => {
    arr.sort((a,b)=> a - b)
    const index = arr.findIndex(numbers => numbers >= num)
    if(index === -1){
      return arr.length
    }
    return index
}
console.log((getIndexToIns([10, 20, 30, 40, 50], 30)))