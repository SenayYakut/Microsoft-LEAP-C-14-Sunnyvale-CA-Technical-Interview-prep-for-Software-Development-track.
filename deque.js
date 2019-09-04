//implementing deque
//double ended queue
//imagine a deck of cards which is where the name of the data structure comes from. You can take a card from the top or bottom of the deck and you can add a card to the top or bottom of a deck.
function Deque(){
    this.stac=new Array();
    this.popback=function(){
        return this.stac.pop();
    }
    this.pushback=function(item){
       return this.stac.push(item);
    }
    this.popfront=function(){
        return this.stac.shift();
    }
    this.pushfront=function(item){
        return this.stac.unshift(item);
    }
}

//lets see what this line of code display
var deque=new Deque();
deque.pushfront("A");
deque.pushfront("B");
deque.pushback("C");
alert(deque.popfront("A"));
alert(deque.popback());
//it returns B followedby C
