reverse_string = "This is the string to be reversed";
function revstr(str){
    return str.split('').reverse().join('')
    console.log(reverse_string)
}
console.log(revstr(reverse_string));

function reversal(str){
    let arr = str.split('')
    let left = 0 , right = arr.length -1;
    while(left<right){
        [arr[left] , arr[right]] = [arr[right] , arr[left]];
        left++;
        right--;
    }
    return arr.join('')
}
console.log(reversal(reverse_string))