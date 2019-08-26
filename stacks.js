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
