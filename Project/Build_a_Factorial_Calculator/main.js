const num = 5;
const factorialCalculator = (number) => {
  let result = 1;
  let i = 1
  while(i<=number){ 
    result *= i;
    i++;
  }
  return result
}
factorialCalculator(num);
const factorial = (factorialCalculator(num));
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg)