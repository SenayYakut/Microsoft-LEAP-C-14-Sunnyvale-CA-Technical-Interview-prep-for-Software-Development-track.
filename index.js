//Palindrome question answer(if the given string is a palindrome or not)
function palindrome(str){
    var unWanted=/[\W_]/g;
    var strLower=str.toLowerCase().replace(unWanted, "");
    var reversed=strLower.split("").reverse().join("");
    return strLower===reversed;
}

palindrome("madam");