let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name,attribute){
  const contact = contacts
  for(let i = 0; i< contact.length;i++){
    if(contact[i].firstName === name){
      if(contact[i].hasOwnProperty(attribute)){
        return contact[i][attribute]
      }
      else{
        return `No such property`
      }
    }
  }
  return `No such contact`
}
console.log(lookUpProfile("Sherlock", "likes"))
