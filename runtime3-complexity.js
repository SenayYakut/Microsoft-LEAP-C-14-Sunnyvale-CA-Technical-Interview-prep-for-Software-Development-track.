//How would you solve these problems, think of an O(n^2), O(n log n), O(n) solutions

//1-Find the integer that occurs most frequently in an array.
//input: [1,4,5,4,2,2,4];
//output:4

const mostFrequent=(array)=>{
    let counts={};
    let most=[];
    for(let i=0; i<array.length; i++){
        const item = array[i];
        if(counts[item]===undefined){
            counts[item]=0;
        }
        counts[item]+=1;
    }
}
console.log(mostFrequent([1,4,5,4,2,2,4]));
