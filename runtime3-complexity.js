//How would you solve these problems, think of an O(n^2), O(n log n), O(n) solutions

//1-Find the integer that occurs most frequently in an array.
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


