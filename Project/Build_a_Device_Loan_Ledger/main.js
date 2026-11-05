const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function checkoutDevice(ledger, assetTag, borrower){
  let clone = loadLedger(serializeLedger(ledger))
  if(!clone[assetTag]){
    return { ledger: ledger,
     message: `Device with asset tag ${assetTag} was not found.`}
  }
  if(clone[assetTag].status === "CheckedOut"){
    return {
      ledger:ledger,
      message: `Device with asset tag ${assetTag} is already checked out.`
    }
  }
  clone[assetTag].borrower.name = borrower.name;
  clone[assetTag].borrower.email = borrower.email;
  clone[assetTag].status = "CheckedOut"

  return {
    ledger:clone,
    message:`Device ${assetTag} has been checked out by ${borrower.name}.`
  }
}
checkoutDevice(equipmentLedger[4])
function checkinDevice(ledger, assetTag){
  let clone = loadLedger(serializeLedger(ledger));
  if(!clone[assetTag]){
    return { ledger: ledger,
     message: `Device with asset tag ${assetTag} was not found.`}
  }
  if(clone[assetTag].status === "CheckedIn"){
    return {
      ledger:ledger,
      message:`Device with asset tag ${assetTag} is already checked out.`
    }
  }
  clone[assetTag].borrower.name = "";
  clone[assetTag].borrower.email = "";
  clone[assetTag].dueDate = "";
  clone[assetTag].status = "CheckedIn";
  return {
    ledger:clone,
    message:`Device ${assetTag} has been checked out`
  }
}
/*Hàm kiểm tra danh sách quá hạn */
function listOverdueDevices(ledger,today){
  let arr = [];
  let todayDate = today.split('/');
  let newday = parseInt(todayDate[1]);
  let newmonth = parseInt(todayDate[0]);
  let newyear = parseInt(todayDate[2]);
    for (let key in ledger) {
      let device = ledger[key];
      if(device.status === "CheckedOut"){
      let newdate = device.dueDate.split('/');
      let day = parseInt(newdate[1]);
      let month = parseInt(newdate[0]);
      let year = parseInt(newdate[2]);
      if(
        year < newyear ||
        (year === newyear && month < newmonth) ||
        (year === newyear && month === newmonth && day < newday)
      ) {
         arr.push(device) 
      }
    }
  }
   for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let date1 = arr[j].dueDate.split("/");
      let date2 = arr[j + 1].dueDate.split("/");

      let year1 = parseInt(date1[2]);
      let month1 = parseInt(date1[0]);
      let day1 = parseInt(date1[1]);

      let year2 = parseInt(date2[2]);
      let month2 = parseInt(date2[0]);
      let day2 = parseInt(date2[1]);

      if (
        year1 > year2 ||
        (year1 === year2 && month1 > month2) ||
        (year1 === year2 && month1 === month2 && day1 > day2)
      ) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; 
}
function serializeLedger(ledger){
  return JSON.stringify(ledger)
}
function loadLedger(json){
  return JSON.parse(json)
}

console.log(listOverdueDevices(equipmentLedger, "11/5/2025"));