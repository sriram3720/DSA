
class Node{
    constructor(val){
        this.data=val;
        this.next=null;

    }
}

let head;

function push(new_data){
    let new_node= new Node(new_data);
    new_node.next=head;
    head=new_node;

}

function detectLoop(h){
    let s= new Set();
    while(h!=null){
        if(s.has(h)){
            return true;
        }
        s.add(h);
        h= h.next;
        console.log(s)
        console.log(head.next.next)
       return false;
   
    }
}
push(0);
push(3);
push(5);
   //head.next.next.next=head;
console.log(detectLoop(head))
