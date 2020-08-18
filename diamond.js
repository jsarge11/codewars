const getNumberOfStars = (num, hasSpaces, total) => {
    let spacesAmt = (total - num) / 2;
    let spaces = '';

    for (let i = 0; i < spacesAmt;  i++) {
        spaces += ' ';
    }
    
    let stars = '';
    for (let i = 0; i < num;  i++) {
        stars += '*';
    }

    return hasSpaces  ?  spaces + stars + '\n' : stars + '\n';
}

function diamond(num) {
    if (num % 2 === 0 || num < 0) {
        return null;
    } else {
        if (num === 1) {
            return '*\n';
        } else {

            let diamondString = '';
            for(let i = 1; i < num; i +=2) {
                diamondString += getNumberOfStars(i, true, num);
            }
            diamondString += getNumberOfStars(num, false, num);
            for(let i = num - 2; i > 0; i -=2) {
                diamondString += getNumberOfStars(i, true, num);
            }
            return diamondString
        }
    }
}


console.log(diamond(0))
console.log(diamond(0))
console.log(diamond(1))
console.log(diamond(2))
console.log(diamond(3))
console.log(diamond(4))
console.log(diamond(5))
console.log(diamond(6))
console.log(diamond(7))


// return null if 0 or even


// until it equals 1, add two

// print out number

// until it equals one subtract two




