
for(let i=0;i<5;i++){
    for(let z=0;z<5-i;z++){
        process.stdout.write("   ")
    }
    
    for(let x=0;x<1+i;x++){
        process.stdout.write(" # ")
    }
    for(let k=0;k<1 +i;k++){
        process.stdout.write(" # ")
    }
    for(let k=0;k<1+i;k++){
        process.stdout.write("   ")
    }
    console.log("   ")
}
for(let o=0;o<5;o++){
    for(let l=0;l<1+o;l++){
        process.stdout.write("   ")
    }
    for(let m=0;m<5-o;m++){
        process.stdout.write(" # ")
    }
    
    for(let h=0;h<5-o;h++){
        process.stdout.write(" # ")
    }
    for(let s=0;s<1+o;s++){
        process.stdout.write("   ")
    }
    console.log("  ")
}



