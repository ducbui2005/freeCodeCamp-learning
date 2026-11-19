const diffArray = (...arr) => {
  let result = []
  let firstArr = arr[0];
  let secondArr = arr[1];

  const firstEl = firstArr.filter(item =>!secondArr.includes(item));
  const secondEl = secondArr.filter(item=>!firstArr.includes(item));

  result = firstEl.concat(secondEl);
  return result
}
console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]))