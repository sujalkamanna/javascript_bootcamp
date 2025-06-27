let palindrome_string = "naman";

function check_palindrome(str) {
    if (str === str.split('').reverse().join('')) {
        console.log("It is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }
}

check_palindrome(palindrome_string);


function checking_palindrome(palindrome_string){
    let left, right;
    left = 0;
    right = palindrome_string.length -1
    while(left<right){
        if(palindrome_string[left] != palindrome_string[right]){
            return false;
        }
        left++;
        right--;
    }
    return true
}
console.log(checking_palindrome(palindrome_string))