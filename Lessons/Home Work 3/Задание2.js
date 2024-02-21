function reverseString(inputString) {
    let word = '';


    for (let i = inputString.length - 1; i >= 0; i--) {
        word += inputString[i];
    }

    return word
}

let result = reverseString('Привет, мир!');
console.log(result);


