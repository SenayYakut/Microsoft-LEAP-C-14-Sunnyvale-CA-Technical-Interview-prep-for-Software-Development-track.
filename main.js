// Popular algorithm question's solution 1
//reversed question 

function reversed(str){
    var strReversed={};
    strReversed+=str.split("").reverse().join("");
    return strReversed;
}
console.log(reversed("senay"));//yanes
console.log(reversed("123456"));//654321
console.log(reversed("I like to cook a banana bread this weekend. Oh yumm!"));//!mmuy hO .dnekeew siht daerb ananab a kooc ot ekil I

//Write a function that checks if the given word palindrome

function palindrome(str){
    var unWanted=/[\W_]g/;
    var strLower=str.toLowerCase().replace(unWanted, "");
    var strReversed=strLower.split("").reverse().join("");
    return strLower===strReversed;
}
console.log(palindrome("senes"));
console.log(palindrome("nurses run"));
console.log(palindrome("level-up"));
console.log(palindrome("333"));

