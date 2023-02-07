
let num=[1,2,3,1,3];

function repeat(arr){
  let repeat= false;
  let s=new Set();
  for(let i=0;i<arr.length;i++){

    if(s.has(arr[i])){
      repeat =true;

    }else{

      s.add(arr[i])
    }
  } 
  console.log(s)
console.log(repeat)
 
}
let result=repeat(num);
console.log(result);