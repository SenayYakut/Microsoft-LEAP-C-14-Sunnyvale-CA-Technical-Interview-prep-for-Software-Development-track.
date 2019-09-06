//consists of node contains a data field and a reference(link) to the next node.
// singly linked list, doubly linked list, circular linked list.

const n1={
    data:100
}
const n2={
    data: 200
};
n1.next=n2;

console.log(n1);

class Node {
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}
const n1=new Node(100);
console.log(n1);

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    //insert the first node
    insertFirst(data){
        this.head= new Node(data, this.head);
    }
}