const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};
 
function runSequence(config,cycles) {
  let fail = config.fault
  let sephera = config.phases
  if(sephera.length === 0){
      console.log("No phases found")
      return
  }
  if(fail === true){
      console.log("Faulted phase!");
      return
  }
  if(sephera){
  for(let j = 0;j<cycles;j++){
    for(let i = 0;i<sephera.length;i++){
      if(sephera[i].duration<=0){
          console.log("Invalid phase detected")
      }
      else{
          console.log(`Switching to ${sephera[i].color} for ${sephera[i].duration} s`)
      }
    }
  }
}
}
function generateTimeline(config,cycles){
  let result = [];
  let sephera = config.phases
  let total = 0;
  for(let i = 0 ;i < cycles;i++){
    for(let j = 0;j<sephera.length;j++){
      total += sephera[j].duration;
      result.push(total)
    }
  }
  return result;
}
console.log(generateTimeline(config2,1))