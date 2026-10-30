

function normalizeUnits(manifest){
  const newManifest = {...manifest}
  if(newManifest.unit === "lb" ){
    newManifest.weight = manifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }))

function validateManifest(manifest){
  const newManifest = {};

  if(manifest.containerId === undefined){
   newManifest.containerId = "Missing";
  }
  else if(manifest.containerId === null||manifest.containerId <= 0||!Number.isInteger(manifest.containerId)){
    newManifest.containerId = "Invalid";
  }
  if(manifest.destination === undefined){
   newManifest.destination = "Missing";
  }
  else if(typeof manifest.destination !== "string" || !manifest.destination.trim()){
    newManifest.destination = "Invalid";
  }
  if(manifest.weight === undefined){
    newManifest.weight = "Missing"
  }else if(manifest.weight <= 0||Number.isNaN(manifest.weight)){
    newManifest.weight = "Invalid";
  }
  if(manifest.unit === undefined){
    newManifest.unit= "Missing";
  }
  else if(manifest.unit !== "kg" && manifest.unit !== "lb"){
    newManifest.unit = "Invalid"
  }
  if(manifest.hazmat === undefined){
    newManifest.hazmat= "Missing"
  }else if(typeof(manifest.hazmat) !== "boolean"){
    newManifest.hazmat = "Invalid";
  }
  return newManifest
}
console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }))

function processManifest(manifest) {
  const validate = validateManifest(manifest);
  
  let hasError = 
    validate.containerId !== undefined || 
    validate.destination !== undefined || 
    validate.weight !== undefined || 
    validate.unit !== undefined || 
    validate.hazmat !== undefined;

  if (hasError) {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validate);
    return;
  }
  
  console.log(`Validation success: ${manifest.containerId}`);
  const normalize = normalizeUnits(manifest);
  console.log(`Total weight: ${normalize.weight} kg`);
  return normalize;
}
console.log(processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }))