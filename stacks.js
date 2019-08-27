//Stack is LIFO Which is last in first out, think like a pile of pancakes and when you eat, you eat from top and you eat the first one last
//Stack is a FILO as well, 
//Stack has limited acsess, you can only push or pop things from top
var letters=[];//this is my stack
var word ="senay";
var rword="";

//put letters of word into stack
for(var i=0; i<word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(let i=0; i<word.length; i++){
    rword+=letters.pop();
}

//indeed my name is not a palindrome
if(rword===word){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}

//create a stack

var Stack =function(){
    this.count=0;
    this.storage={};

    //Adds a value onto the end of the stack
    this.push=function(value){
        this.storage[this.count]=value;
        this.count++;
    }
    //Removes and returns the value at the end of the stack
    this.pop=function(value){
        if(this.count===0){
            return indefined;
        }
        this.count--;
        var result=this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    //returns the size of the stack
    this.size=function(){
        return this.count;
    }
    //returns the value at the end of stack
    this.peek=function(){
        return this.storage[this.count-1];
    }
}
var myStack=new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("senay yakut");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


//JavaScript methods used to implement stack
pop();
push();
peek();
swap();//the two top most element can be swaped
empty();//returns true if the stack is empty otherwise false;

// Implementation of stack in javascript
//stacks are not the arrays, but you can implement Stack from arrays

// Stack class 
class Stack { 

	// Array is used to implement stack 
	constructor() 
	{ 
		this.items = []; 
	} 

	// Functions to be implemented 
	// push(item) 
	// pop() 
	// peek() 
	// isEmpty() 
    // printStack() 
    push(element) 
{ 
    // push element into the items 
    this.items.push(element); 
} 

pop() 
{ 
    // return top most element in the stack 
    // and removes it from the stack 
    // Underflow if stack is empty 
    if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
} 
peek() 
{ 
    // return the top most element from the stack 
    // but does'nt delete it. 
    return this.items[this.items.length - 1]; 
} 

isEmpty() 
{ 
    // return true if stack is empty 
    return this.items.length == 0; 
} 
// printStack function 
printStack() 
{ 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    return str; 
}
// printStack function 
printStack() 
{ 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    return str; 
}

} 
var stack = new Stack(); 
console.log(stack.isEmpty());  
console.log(stack.pop());  
// Adding element to the stack 
stack.push(10); 
stack.push(20); 
stack.push(30); 
  
// Printing the stack element 
// prints [10, 20, 30] 
console.log(stack.printStack()); 
  
// returns 30 
console.log(stack.peek()); 
  
// returns 30 and remove it from stack 
console.log(stack.pop()); 
  
// returns [10, 20] 
console.log(stack.printStack());  

