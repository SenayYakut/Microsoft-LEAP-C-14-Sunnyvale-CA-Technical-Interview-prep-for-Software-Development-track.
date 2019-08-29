//Compare the following pieces of code that have the same functionality.
//what is the runtime complexity for each function, think about Big O
//it is 2 loops so it is O(N^2) Exonentially it will grow
//it is Quadratic
const findDuplicatesA=(array)=>{
    const duplicates=[];
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]===array[j]){
                duplicates.push(array[j]);
            }
        }
    }
    return duplicates;
}
const array=[5,2,4,5,4];
console.log(findDuplicatesA(array));


const findDuplicatesB = (array) => {
    const seen = new Set();
    const duplicates = new Set();
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (seen.has(value)) {
        duplicates.add(value);
      }
      seen.add(value);
    }
    return duplicates;
  }

  
// this O(N), Linear, since the array is sorted , we dont have to do two loops , 
const findDuplicatesC=(array)=>{
    array.sort();
    const duplicates=[];
    for(let i=0; i<array.length-1; i++){
        const item=array[i];
        const nextItem=array[i+1];
        if(item===nextItem){
            duplicates.push(item);
        }
    }
    return duplicates;
}
console.log(findDuplicatesC([5,2,4,5,4]));


const findDuplicatesD = (array) => {
    const duplicated = [];
    const seen = [];S
    for (let search = 0; search < array.length; search++) {
      const item = array[search];
      seen.push(item);
      if (seen.indexOf(item) !== -1) {
        duplicated.push(item);
      }
    }
    return duplicated;
  }
  console.log(findDuplicatedD([5,2,4,5,4]));