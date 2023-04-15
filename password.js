function isSafe(password){
if(password.length >= 6 &&
     password.match(/([0-9].*[a-zA-Z~@#\^\$&\*\(\)-_\+=\[\]\{\}\|\\,\.\?\s]*)/))
 {return true;} else return false
}

let regex;
console.log(regex.test("sd<f456R,TH*"));