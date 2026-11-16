function sumFibs(num){
  let a = 0;
  let b = 1;
  let result = 0;
  for(let i = 0;a<=num;i++){
    if(a%2!==0){
      result+=a
    }
    let fibon = a + b;
    a = b;
    b = fibon;
  }
  return result
  
}
console.log(sumFibs(30000))