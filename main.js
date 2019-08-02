// Popular algorithm question's solution 1
//reversed question 

function reversed(str){
    var strReversed={};
    strReversed+=str.split("").reverse().join("");
    return strReversed;
}
console.log(reversed("senay"));//yanes
console.log(reversed("123456"));//654321
console.log(reversed("I like to cook a banana bread this weekend. Oh yumm!"));//!mmuy hO .dnekeew siht daerb ananab a kooc ot ekil I
