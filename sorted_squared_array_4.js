//Coding Challenge #4 Sorted Squared Array 

function sortedSuqaredArray(array) {
    const squares = new Array(array.length).fill(0);  // fill with 0

    for (let i = 0; i < array.length; i ++) { 
        const value = array[i];   
        squares[i] = value * value;
    }

    squares.sort((a, b) => a - b);
    return squares;
}

exports.sortedSquaredArray = sortedSquaredArray;