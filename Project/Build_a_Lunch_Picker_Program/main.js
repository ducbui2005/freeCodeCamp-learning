const lunches = [];

const addLunchToEnd = (arr,str) => {
  arr.push(str);
  console.log( `${str} added to the end of the lunch menu.`)
  return arr;
}
const addLunchToStart = (arr,str) =>{
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return arr;
}
const removeLastLunch = (arr) =>{
  let itemPop = arr.pop();
  if(arr.length === 0){
    console.log("No lunches to remove.")
  }
  else{
    console.log(`${itemPop} removed from the end of the lunch menu.`)
  }
  return arr;
}

const removeFirstLunch = (arr) => {
  let itemShift = arr.shift();
  if(arr.length === 0){
    console.log("No lunches to remove.")
  }
  else{
    console.log(`${itemShift} removed from the start of the lunch menu.`)
  }
  return arr;
}
const getRandomLunch = (arr) => {
  let random = arr[Math.floor(Math.random() * arr.length)] ;
  if(arr.length === 0){
    console.log("No lunches available.")
  }
  else{
     console.log(`Randomly selected lunch: ${random}`)
  }
}
const showLunchMenu = (arr) => {
  if(arr.length === 0){
    console.log("The menu is empty.")
  }
  
  else{
    console.log(`Menu items: ${arr.join(", ")}`)
  }
}
(showLunchMenu(["Greens", "Corns", "Beans"]))