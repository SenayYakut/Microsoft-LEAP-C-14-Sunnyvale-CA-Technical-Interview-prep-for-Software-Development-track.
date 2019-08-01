//Palindrome question answer(if the given string is a palindrome or not)
function palindrome(str){
    var unWanted=/[\W_]/g;
    var strLower=str.toLowerCase().replace(unWanted, "");
    var reversed=strLower.split("").reverse().join("");
    return strLower===reversed;
}

palindrome("madam");


// Sums Answer;

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

console.log(twoSum([1,2,3,4,5,6],7));

