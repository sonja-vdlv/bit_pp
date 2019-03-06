// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
//
//	12345 -> 54321

function revNum(x) {
    var num = x.toString();
    num = num.split("");
    num = num.reverse();
    num = num.join("");
    console.log(num);
}
revNum(12345);

// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Note: Assume punctuation, numbers and symbols are not included in the passed string.
//
//“Webmaster” -> “abeemrstw”

function sortLetters(someString) {
    var
}