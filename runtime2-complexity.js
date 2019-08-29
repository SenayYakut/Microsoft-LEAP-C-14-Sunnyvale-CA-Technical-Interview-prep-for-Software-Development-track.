//Compare the following pieces of code that have the same functionality.
//what is the runtime complexity for each function, think about Big O
//it is 2 loops so it is O(N^2) Exonentially it will grow
//it is Quadratic
const findDuplicatesA=(array)=>{
    const duplicated=[];
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]===array[j]){
                duplicated.push(array[j]);
            }
        }
    }
    return duplicated;
}
const array=[5,2,4,5,4];
console.log(findDuplicatesA(array));


const findDuplicatesB=(array)=>{

}

const findDuplicatesC=(array)=>{

}

const findDuplicatesD=(array)=>{

}