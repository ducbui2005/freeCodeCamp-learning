function getAverage(arr){
  let result = 0
  for(let i = 0;i<arr.length;i++){
    result += arr[i];
  }
  return result/arr.length
}

function getGrade(score){
  if(score===100){
    return "A+";
  }
  else if(score>=90 && score <=99){
    return "A";
  }
  else if(score>=80&& score <=89){
    return "B";
  }
  else if(score>=70&& score <=79){
    return "C";
  }
  else if(score>=60&& score <=69){
    return "D";
  }
  else if(score>=0&& score <=59){
    return "F";
  } 
}

function hasPassingGrade(score){
  let result = getGrade(score)
  if(result === "F"){
    return false;
  }
  else{
    return true;
  }
}

function studentMsg(arr,num){
  let hasPass = hasPassingGrade(num)
  if(hasPass===true){
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(num)}. You passed the course.`
  }
  else{
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(num)}. You failed the course.`
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))