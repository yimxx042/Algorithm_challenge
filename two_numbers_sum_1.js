//Algorithm challenge #1

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++){         //fitst number
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++){         //second number, check # after first number as i + 1
            const secondNum = array [j];                     
            if (firstNum + secondNum === targetSum) {    // first number + second number is equal to targetSum
                return [firstNum, secondNum];             //return first number, second number
            }
        }
    }
    return[];                                
}

exports.twoNumberSum = twoNumberSum;