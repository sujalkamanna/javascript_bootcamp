//filter method

arr1 = [654,64,8,321,987]
arr2 = [65654,87,354,21,5,78,958]

//function method
let arr3 = arr2.filter((value)=>{
    return value<100
})
console.log(arr3)

// array menthod
arr4 = [10,8,7,5,48,9]
arr4.sort((a,b)=>{
    return a-b
})
console.log(arr4)


//sort function
function sort_no(a,b){
    return a-b;
}
arr1.sort(sort_no)
console.log(arr1)
