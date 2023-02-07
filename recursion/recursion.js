

function count(n){
    console.log(n);

    if(n>0){
        count(n-1);
    }
}
count(5);