const maskEmail = (email) => {
  let username = email.slice(0 , email.indexOf("@"));
  let firstname = username[0];
  let lastname = username.slice(username.length-1);
  let mask = username.slice(1,username.length-1);
  let replace = mask.replaceAll(mask,"*").repeat(mask.length);
  let domain = email.slice(email.indexOf("@"),email.length);
  return firstname + replace + lastname + domain
}
const email = "buihuuduc3458@gmail.com"
console.log(maskEmail(email))