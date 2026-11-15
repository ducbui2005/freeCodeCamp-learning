const generatePassword = (pass) => {
  let result = '';
  let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
  for(let i = 0;i<pass;i++){
    let random = Math.floor(Math.random() * character.length);
    let randomCharacter = character[random];
    result+=randomCharacter
  }
  return result;
}
const password = generatePassword(6)
console.log(`Generated password:${password}`)