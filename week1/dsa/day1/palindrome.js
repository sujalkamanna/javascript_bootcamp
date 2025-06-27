let palindrome_string = "naman";

function check_palindrome(str) {
    if (str === str.split('').reverse().join('')) {
        console.log("It is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }
}

check_palindrome(palindrome_string);
