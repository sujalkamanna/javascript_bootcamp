arr = [1,2,3,4,5,6,7,8,9,10]

for(let i =arr.length-1;i>=0;i--){
    if(i%2===0){
        arr.splice(i,1)
    }
}
console.log(arr)