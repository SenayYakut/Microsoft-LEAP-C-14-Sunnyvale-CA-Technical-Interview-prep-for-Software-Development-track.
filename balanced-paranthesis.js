//Given a string made up of opening and closing paranthesis , return whether the string is balanced or not

function peek(stack){
    return [stack.length-1]
}
function isBalanced(str){
    let stack=[]
    
    //if there is any opening paranthesis ,push to stack
    for(let i=0; i<str.length; i++){
        let letter = str.charAt(i)
        if(letter==="("){
            stack.push(letter);
        }else if(letter===")"){
            if(stack.length===0){
                return false;
            }else if(peek(stack)==="("){
                stack.pop();
            }else{
            return false;
            }
        }
    }
    return stack.lenght===0;
}

console.log(isBalanced("((()))"));
