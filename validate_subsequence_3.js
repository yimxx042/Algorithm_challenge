//Coding Challenge #3 Validate Subsequence

function isValidSubsequence(array, sequence) {
    let i = 0;
    for (const value of array) {  // values in array
        if ( i === sequence.length ) break;  // loop until i is equal to sequence.length
        if ( sequence[i] === value ) i++;  // if  i of sequence is same value is array
    }
    return i === sequence.length;      
}

exports.isValidSubsequence = isValidSubsequence;