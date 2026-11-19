const destroyer = (...arr) => {
  let first = arr[0];
  let slice = arr.slice(1);
  let result = first.filter(item => !slice.includes(item));
  return result
}
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))