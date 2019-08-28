/* 
Read the following functions. For each one, figure out:
-What does the function do?
-Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!)
-Run the function with different inputs sizes and see how long it takes
-When the input size doubles, what happens to the time it takes to run?
*/

const myMysteryFunction0=function(array){
    const myFavoriteNum= 7;
    for(let i=0; i<array.length; i++){
        if(array[i]===myFavoriteNum){
            return true;
        }
     }
     return false;
    }
    myMysteryFunction0([1,2,3,4,5,6,7,8,9,10,11,12,1,3,13,145,12345,67]);

// function iterate through all of the characters in the array and trying to find out if myfavarite number existed
// it is linear so O(n),
//when the size doubles it more time

const myMysteryFunction1=function(array){
    const index=4;
    return array[index];
}
myMysteryFunction1([1,2,5,6,7,8,4]);

// this function finds the specific charcter with the sertain index in the array
// it is constant so O(1); it will always take the same time, best algorithm
// it is always same time, 

const myMysteryFunction2=function(n){
    let primes=[];
    for(let i=2; i<n; i++){
            if(i%2===0){
                let factorFound=true;
            }
        }
        if(factorFound===false){
            primes.push(i);
        }
    } 
    return primes.length;

}

myMysteryFunction2([1,2,3,4,5,6,7,8,9,10]);

const myMysteryFunction3=function(array){
    myLength=array.length;
    if(myLength%2===0){
        return "even length";
    }else{
        return "odd length";
    }
}

myMysteryFunction3([1,2,3,4,5,6,7,8]);
myMysteryFunction0([2,3,4,5,6,7,8]);

//function trying to find out if the lenght of array even ot odd
//O(n) it is linear, it has to go through all of the charters in the array
// if size grows it takes more time and space

myMysteryFunction4=function(string){
    let eCounts=0;
    for(let i=0; i<string.length; i++){
        if(string[i]==="e"){
            eCounts++;
        }
    }
    return eCounts;
}

myMysteryFunction4("Senay");
// it is O(n),linear

myMysteryFunction5=function(array){
    let sorted=array.sort();
    return sorted;
}

myMysteryFunction5(["s","a","e","n","y"]);
//O(n) it is linear, space and time will be increase by size


myMysteryFunction6=function(dic, key){
    let value=dic[key];
    return value;
}
//O(1) it is constant

const myMysteryFunction8=function(dictonary){
    for(var key in dictionary){
        let value=dictionary[key];
        if(value===key){
            return true;
        }
        return false;
    }
}

// O(n^2); i will increase by the size of the dictionary but it hast to allthe keys in the dic and after that it has to check if value matches

const myMysteryFunction7=function(array){
    let lookingFor=9;
    let lowerBound=0;
    let upperBound=array.length-1;
    let guessIndex=Math.floor(upperBound/2);
    while(lowerBound<=upperBound){
        if(lookingFor===array[guessIndex]){
            return true;
        }else if(lookingFor<array[guessIndex]){
            upperBound=guessIndex-1;
        }else{
            lowerBound=guessIndex+1;
        }
        guessIndex=Math.floor((lowerBound+upperBound)/2);
    }
    return false;
}

myMysteryFunction7([1,2,3,4,5,6,7,8,9,0]);
//this is a great example of binary search which has O(logn) complexity, it is logaritmatic

//RunTimeExamples

//Constant-Time-Algorithm O(1)
const getLast = items =>
    items[items.length-1];

 console.log(getLast(["a","b","c","d"]));//d one iteration, it already knows the position
 console.log(getLast(["1","2","3","4","5"]));//5 still one iteration it is constant O(1)

 //Linear-Time-Algorithm O(N)
 //think about the worst case so it always has to iterate through all of the elements which means N iteration
 //iteration grows with number of items
 const findIndex = (items, match) => {
    for (let i = 0, total = items.length; i < total; i++)
      if (items[i] == match)
        return i;
     return -1;
  };
 const array=["s","e","n","a","y"];
 console.log(findIndex(array, "s"));//0 best case 
 console.log(findIndex(array,"y"));//4 worst case
 console.log(findIndex(array, "k"));//-1 worsdt case

 //Quadratic-Time Algorithm O(N^2)-Order N squared
 //The time grows exponentially related to the number of inputs.
 //Think about Square Matrix

 const buildSquareMatrix=items=>{
     let matrix=[];
     let total=items.length;
     for(let i=0; i<total; i++){
         matrix[i]=[];
         for(let j=0; j<total; j++){
             matrix[i].push(items[j]);
         }
     }
     return matrix;
 }

 console.log(buildSquareMatrix(["a","b","c"]));


//Logarithmic-Time-Algorithm O(Logn) Order log N
//THIS one usually most efficent approach when dealing with large collections of data. they split the data in chunks and discarda large amount on every iteration, usually the half or log base 

const quickSort = list => {
    if(list.length<2)
        return list;
    let pivot=list[0];
    let left=[];
    let right=[];
    let total=list.length;
    
    for(let i=1; i<total; i++){
        if(list[i]<pivot)
            left.push(list[i]);
         else
            right.push(list[i]);
        }
    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
};
console.log(quickSort( ['q','a','z','w','s','x','e','d','c','r']));


