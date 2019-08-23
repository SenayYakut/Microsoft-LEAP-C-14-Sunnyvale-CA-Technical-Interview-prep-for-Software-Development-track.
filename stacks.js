//Stack is LIFO Which is last in first out, think like a pile of pancakes and when you eat, you eat from top and you eat the first one last

var letters=[];//this is our stack
var word ="freeCodeCamp";
var rword="";

//put letters of word into stack
for(var i=0; i<word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(let i=0; i<word.length; i++){
    rword+=letters.pop();
}

if(rword===word){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}

//create a stack


