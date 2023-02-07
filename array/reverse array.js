let arr=[3,4,54,1,2];

function reverse(arr,start,end){
    let temp= arr[start];
    arr[start]=arr[end];
    arr[end]=temp;

    if(start+1<end-1){
        reverse(arr,start+1,end-1);
    }
   
}

reverse(arr,0,4)
console.log(arr)