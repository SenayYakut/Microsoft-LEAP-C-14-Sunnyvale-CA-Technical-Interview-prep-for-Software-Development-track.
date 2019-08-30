//How would you solve these problems, think of an O(n^2), O(n log n), O(n) solutions

//1-Find the integer that occurs most frequently in an array. it is Linear O(N); PRETTY EFFICENT, WE USE THE HASHMAP.
const array1=[1,2,2,2,2,3,3,4,4,4,5,12,3,12,3,12,4,12,12];
const array2=[3,4,5,7,7,7,7];
const array3=[0];
const array4=[];

const mostFrequentItem=(array)=>{
    let counts={};
    let compare=0;
    let mostFrequent;
    for(let i=0; i<array.length; i++){
        let item =array[i];
        if(counts[item]===undefined){
            counts[item]=1;
        }else{
            counts[item]+=1;
        }
    if(counts[item]>compare){
        compare=counts[item];
        mostFrequent=array[i];
        }  
    }
    return mostFrequent;  
}
console.log(mostFrequentItem(array1));//12
console.log(mostFrequentItem(array2));//7
console.log(mostFrequentItem(array3));//0
console.log(mostFrequentItem(array4));//undefined


//Write a function that takes an array of numbers and returns the greatest difference you can get by subtracting any two of those numbers.
//input:[1, 5, 3, 1, 15], output:14


const greatestDifference=(array)=>{
    let sorted=array.sort();
    let firstIndex;
    let lastIndex;
    let maxDifference;
    if(array.length>0){
       firstIndex=sorted[0];
       lastIndex=sorted[(array.length)-1];
       maxDifference=lastIndex-firstIndex;
    }
    return maxDifference;
}
console.log(greatestDifference([1,3,5,4,27]));


var findMaxDiff = function(arr){
    var diffs = [];
    for(var i = 1; i < arr.length; i++){
        for(var j = 0; j < i; j++){
            if(arr[i] > arr[j]){
                diffs.push(arr[i]-arr[j]);
            }
        }
    }
    return Math.max.apply( Math, diffs );
}

console.log(findMaxDiff([1,5,3,1,15]));