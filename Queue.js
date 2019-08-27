//creating a queue
class Queue{
    constructor(){
        this.data=[];
    }
    enqueue(record){
        this.data.unshift(record);
    }
    dequeue(){
        return this.data.pop();
    }
}

const q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");

let removed=q.dequeue();

console.log(removed);
//Since we put the "a" first that is the item needs to be out first. FIFO//first come first serve// remember all about long theater lines

//Queue structure


var Queue = function(limit){
    this.que=[];
    this.push=fuction(item){
        if(limit>0){
            if(this.que.length<limit){
                this.que.push(item);
            }else{
                this.que.shift();
                this.que.push(item);
            }
        }else{
            this.que.push(item);
        }
    };


this.pull=function(){
    if(this.que.length){
        return this.que.shift();
    }
};
}

var q=new Queue(10);
var uq=new Queue();
var rpt="";
textSize(14);
frameRate(5);

mouseClicked=function(){
    var num;
    if(mouseX<200){
        
    }
}
