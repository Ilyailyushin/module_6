palidrome("Довод")
function palidrome(str){
    str=str.toLowercase();
    return str === str.split("").reverse().join("");
}
const check = palindrome("Довод")
console.log(check?'Слово  является палиндромом': ' Не является палиндромом')