// Find Maximum in Array	
// Given an array of integers, return the maximum element.
// 

let arr = [10,20,30,40,50]

let max = Math.max(...arr)
console.log("the max no in arr is :",max)


let maximun = arr[0];

for(let i in arr){
    if(arr[i]>maximun){
        maximun = arr[i]
    }
}

console.log("the max no in array is:",maximun)
/*time complexity
O(n)
*/