var isPalindrome = function(x) {
    x = String(x);
    
    let y = '';
    
    for (let i = x.length - 1; i >= 0; i--){
        y += x[i];    
    }
    
    if(x === y) {
        return true;
    } else {
        return false;
    }
};

/*
    edge case - all negative numbers are not palindrome
    
    x % 10 while the original number is larger than the new number
*/

var isPalindrome = function(x) {
    let new = 0;
    
}