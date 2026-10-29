const confirmEnding = (str1,str2) => {
  return str1.substring(str1.length-str2.length) == str2
}
console.log(confirmEnding("Connor", "n"))