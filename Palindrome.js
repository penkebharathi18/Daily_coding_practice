function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

let word = "racecar";
if (isPalindrome(word)) {
    console.log(word + " is a Palindrome!");
} else {
    console.log(word + " is NOT a Palindrome.");
}
