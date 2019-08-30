//How would you solve these problems, think of an O(n^2), O(n log n), O(n) solutions

//1-Find the integer that occurs most frequently in an array.
//input: [1,4,5,4,2,2,4];
//output:4
const array=[1,4,5,4,2,2,4];
const mostFrequent=(array)=>{
    let mf=0;
    let item;
    for(let i=0; i<array.length; i++){
        for(let j=i; j<array.length; j++){
            if(array[i]===array[j])
                mf++;
        }
        item=array[i];
    } 
    return item;
}
console.log(mostFrequent(array));

