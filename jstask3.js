// function takes 1 number as parameter
function numberMixer(anyNumber) {
    let numberArray = []; // Array to store new set of mixed numbers based on divisibility
    for (i = 1; i <= anyNumber; i++) { // for loop to iterate parameter
        let newNumber; // a new variable is declared to hold new mixed numbers based on divisibility test
        if(i % 2 === 0 && i % 3 === 0 && i % 5===0) { // series of if else statement to test divisibility
            newNumber = 'yu-gi-oh';
        } else if(i % 3 === 0 && i % 5 === 0) {
            newNumber = 'gi-oh';
        } else if (i % 2 === 0 && i%5 === 0) {
            newNumber = 'yu-oh';
        } else if(i % 2 === 0 && i % 3 === 0) {
            newNumber = 'yu-gi';
        } else if (i % 5 === 0) {
            newNumber = '0h';
        } else if (i % 3 === 0) {
            newNumber = 'gi';
        }else if (i % 2 === 0) {
            newNumber = 'yu';
        }else {
            newNumber = i;
        }
        numberArray.push(newNumber); // new numbers are pushed to array
    }
    console.log(numberArray); // array is printed to console
}
numberMixer(100); // numberMixer function is called with argument of 100
numberMixer(55); // numberMixer function is called with argument of 55
