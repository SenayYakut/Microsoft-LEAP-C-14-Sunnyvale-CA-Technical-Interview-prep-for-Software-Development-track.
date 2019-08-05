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


// How do you identify if any given point lies within a rectangle

var s=[-2,-3];
var n=[2,3];
function point(x,y){
    if(s[0]<=x && x<=n[0] && s[1]<=y && y<=n[1]){
        return true
    }else{
        return false;
    }
}
console.log(point(0,0));
console.log(point(-4,2));

// sorting, and comparing

function compare(arr1, arr2){
    var sorted1=arr1.sort();
    var sorted2=arr2.sort();
    
    for(var i=0; i<sorted1.length; i++){
        if(sorted1[0]===sorted2[0]){
            return false;
        }else if(sorted1[i]< sorted2[i] || sorted1[i]> sorted2[i]){
            continue;
        }
    
    }
    return true;
}

console.log(compare([1,2,3,4],[2,3,4,5]));
console.log(compare([1,0,9],[0,10,11]));


//Answer of question number 10

var sum;
var product;
function sumProduct(arr){
    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
        product*=arr[i];
    }
    console.log("Sum:"+sum+", "+"Product:"+product);
}

console.log(sumProduct([1,2,3,4]));
console.log(sumProduct([0,1,2,3,4,5]));
console.log(sumProduct([-1,1,2,3,4,5]));