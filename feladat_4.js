/* Write a function checkSpam(str) that returns true if str contains �viagra� or �XXX�, otherwise false. The function must be case-insensitive. */

let checkSpam = function(str) {
str = str.toLowerCase();
const result = (str.includes('viagra') || str.includes('xxx')) ? true : false;
return result;
}

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);