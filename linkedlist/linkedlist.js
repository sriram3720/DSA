
class Node{
    constructor(val){
        this.data= val;
        this.next=null;
    }
}

let head;

function push(new_data){
    let new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
    console.log(new_node)
}

function getCount(){
    let temp= head;
    let count=0;
    while(temp!=null){
        count++;
       temp=temp.next;
    }
    return count;
}

 push(8);
 push(3);
 push(5);
 console.log(getCount());