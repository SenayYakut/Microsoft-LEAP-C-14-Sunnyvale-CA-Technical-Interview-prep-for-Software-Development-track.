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

//Find the only element in an array that only occurs once
//input :[3,5,3,4,6,6,4] output:5



//Find the common elements of 2 integer arrays


const array1=[1,3,2,5];
const array2=[3,9,8,1];
const conj=[];
for(let i=0; i<array1.length; i++){
	for(let j=0; j<array2.length; j++){
		if(array1[i]===array2[j]){
			conj.push(array1[i]);
		}
	}
console.log(conj);

}

//Determine if 2 strings are anagrams(use the same letters re-arranged)//input "cat","act" returns true;

const anagrams=(str1,str2)=>{
    if(str1.length!==str2.length){
        return false;
    }else{
        for(let i=0; i<str1.length; i++){
            for(let j=0; j<str2.length; j++){
                if(str1[i]===str2[j]){
                    return true;
                }
            }
        }
    }
}
console.log(anagrams("cat","act"));
console.log(anagrams("at","tat"));
console.log(anagrams("cat","dog"));

function compare(a,b){
    let aSorted=a.split("").sort();
    let bSorted=b.split("").sort();
    if(a.length!==b.length){
        return false;
    }else{
        for(let i=0; i<aSorted.length; i++){
            if(aSorted[i]===bSorted[i]){
                return "anagrams";
            }
            return " not anagrams";

        }
        
    }
    console.log(compare(a,b));
}
compare("cat","at");
compare("cat","act");
compare("at","tat");
compare("cat","dog");

//Check if a String is composed of all unique characters

function is_unique(str) {
    var obj = {};
    for(var z=0;z<str.length;z++) {
      var ch = str[z];
      if(obj[ch]) return false; else obj[ch] = true;
    }
    return true;
  }
  // test:
  console.log(is_unique("abcdefgh")); // true
  console.log(is_unique("aa")); // false

  