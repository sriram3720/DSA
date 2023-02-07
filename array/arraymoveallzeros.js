function movezeros(arr){
    let count=0
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!=0){
            arr[count++]= arr[i];
        }

        
    }
    while(count<arr.length-1){
        
        arr[count]=0;
        count++;
    }
}

let num=[2,1,4,0,43,10,4,0,3,0,0];
movezeros(num);
console.log(num);
