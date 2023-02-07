
let srr=[1,2,3,4,5,6,7]

function swap(arr){


    for(let i=0;i<6;i +=2){
      
        var temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;

    }
}
swap(srr);
console.log(srr)