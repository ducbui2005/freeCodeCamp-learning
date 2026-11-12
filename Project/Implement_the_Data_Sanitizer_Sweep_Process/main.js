let logs_1 = [
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%"
];

let logs_2 = [
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "/INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "/INFO: Disk usage stabilized"
];
function sanitizeLog(entry,disallowedCharacter){
  let result = ''
  for(let i = 0;i<entry.length;i++){
    let isallowed = false;
    for(let j = 0;j<disallowedCharacter.length;j++){
      if(entry[i]===disallowedCharacter[j]){
        isallowed = true;
        break;
      }
    }
    if(isallowed === true){
      result+='#'
    }
    else{
      result+=entry[i];
    }
  }
  return result;
}
console.log(sanitizeLog("DEBUG: Server started on port 3000",["a", "S", "r", "t"]));

function cleanLogs(logs,disallowedCharacters){
  let infor = 0;
  let sanitized = 0;
  for(let i = 0;i<logs.length;i++){
    
    if(logs[i].includes("$")===true){
      return `Sanitizing stopped. Failure Reason: Fatal character occurred.`
    }
      if((logs[i].startsWith("/"))){
      infor++;
      }
      else{
      sanitizeLog(logs[i],disallowedCharacters);
      sanitized++;}
  }
  return `Total Entry Count: ${sanitized + infor}. Sanitized Entry Count: ${sanitized}. Informational Entry Count: ${infor}. Finished sanitizing logs.`
}
console.log(cleanLogs(logs_3, ["a", "A", "c", "T"]))