const isLeapYear = (num) => {
  if(num % 4 === 0 && num % 100 !== 0 || num % 400 === 0){
    return `${num} is a leap year.`
  }
  else
  {
    return `${num} is not a leap year.`
  }
}

const year = 2024;

const result = isLeapYear(year);
console.log(result)