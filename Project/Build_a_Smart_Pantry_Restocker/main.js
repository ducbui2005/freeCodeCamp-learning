const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];


const parseShipment = (rawData) => {
  const result = [];
  for(let i = 0;i<rawData.length;i++){
    const arr = rawData[i].split("|");
    const convert = {
      sku: arr[0],
      name: arr[1],
      qty: parseInt(arr[2]),
      expires:arr[3],
      zone:arr[4]
    }
    if(!convert.zone){
      convert.zone = "general"
    }
    let checked = false;
    for(let j = 0;j<result.length;j++){
      if(result[j].zone === convert.zone){
        checked = true;
        break;
      }
    }
    if(!checked){
      result.push(convert)
    }
  }
  return result;
}
function planRestock(pantry,shipment){
  const result = [];

  for(let i = 0 ;i<shipment.length;i++){
    let item = shipment[i];
    let type;

    if(item.qty<=0){
      type = 'discard'
    }
    else{
      let exists = false;
      for(let j = 0;j<pantry.length;j++){
        if(item.sku === pantry[j].sku){
          exists = true;
          break;
        }
      }
      type = exists ? 'restock' : 'donate';
    }
    result.push({type,item})
  }
  return result;
}
function groupByZone(actions){
  const result = {}
  for(let i = 0;i < actions.length;i++){
    const zone = actions[i].item.zone;
    if(!result[zone]){
     result[zone] = []    
    }
    result[zone].push(actions[i])
  }
  return result
}
function clonePantry(pantry){
  const arr = [];
  for(let i = 0;i<pantry.length;i++){
    const string = JSON.stringify(pantry[i]);
    const object = JSON.parse(string);
    arr.push(object);
  }
  return arr;
}

// 1. Tạo shipment
const shipment = parseShipment(rawData);

// 2. Tạo actions
const actions = planRestock(pantry, shipment);

// 3. Nhóm actions theo zone
const groupedActions = groupByZone(actions);

// 4. In kết quả
console.log(groupedActions);

console.log(JSON.stringify(groupedActions, null, 2));