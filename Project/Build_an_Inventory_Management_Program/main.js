const inventory = []
function findProductIndex(prdname){
  const str = prdname.toLowerCase();
  for(let i = 0;i<inventory.length;i++){
    if(inventory[i].name===str){
      return i
    }
  }
    return -1
}
console.log(findProductIndex("flour"));
function addProduct(prdobj){
  const index = findProductIndex(prdobj.name);
  if(index!==-1){
    inventory[index].quantity += prdobj.quantity
    console.log(`${prdobj.name.toLowerCase()} quantity updated`)
  }
  else{
    inventory.push(
      {name : prdobj.name.toLowerCase(),
      quantity : prdobj.quantity}
    )
    console.log(`${prdobj.name.toLowerCase()} added to inventory`)
  }
}
console.log(addProduct({name: "FLOUR", quantity: 5}))

function removeProduct(name,quantity){
  let index = findProductIndex(name)
  if(index!==-1){
    const productName = name.toLowerCase();
    if (inventory[index].quantity < quantity) {
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`);
    }
    else{
      const productName = name.toLowerCase();
      inventory[index].quantity -= quantity;
      const remaining = inventory[index].quantity
      if(remaining === 0){
      inventory.splice(index,1)
      }
      console.log(`Remaining ${productName} pieces: ${remaining}`)
    }
  }
  else{
    console.log(`${name.toLowerCase()} not found`)
  }
}
console.log(removeProduct("FLOUR", 5))



