// Popular algorithm question's solution 1
//reversed question 

function reversed(str){
    var strReversed={};
    strReversed+=str.split("").reverse().join();
    return strReversed;
}
console.log(reversed("senay"));//yanes
console.log(reversed("123456"));//654321
console.log(reversed("I like to cook a banana bread this weekend. Oh yumm!"));//!,m,m,u,y, ,h,O, ,.,d,n,e,k,e,e,w, ,s,i,h,t, ,d,a,e,r,b, ,a,n,a,n,a,b, ,a, ,k,o,o,c, ,o,t, ,e,k,i,l, ,I
