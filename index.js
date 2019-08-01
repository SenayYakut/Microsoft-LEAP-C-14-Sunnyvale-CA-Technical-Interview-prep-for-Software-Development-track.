//Palindrome question answer(if the given string is a palindrome or not)
function palindrome(str){
    var unWanted=/[\W_]/g;
    var strLower=str.toLowerCase().replace(unWanted, "");
    var reversed=strLower.split("").reverse().join("");
    return strLower===reversed;
}

palindrome("madam");


// Sums Answer; //given an array of integers, return the first two integers that add up to 10.

function twoSum(arr, S){
    var sums=[];
    for (var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===S){
                sums.push([arr[i],arr[j]]);
            }
        }
    }
    return sums[0];

}

console.log(twoSum([1,2,3,4,5,6],10));

//determine if a string was an anagram) and discuss the Big O notation of various approaches.
//first of all what is anagram. anagram means all of the characters in a string is same, and they have the same length;

function checkAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    var charStr1=str1.split("").sort();
    var charStr2=str2.split("").sort();

    for(var i=0; i<charStr1.length; i++){
        if (charStr1[i]!==charStr2[i]){
            return false;
        }
    }

    return true;

}

console.log(checkAnagram("senay","esany"));
console.log(checkAnagram("ayse", "seyd"));