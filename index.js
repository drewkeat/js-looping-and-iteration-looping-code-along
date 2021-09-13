// Code your solutions in this file

//returns an array of thank you messages for each name provided to the function
function writeCards(array, event){
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return arr
}

// invokes console.log once for each number, counting down from the number provided to zero
function countDown(num) {
    let i = num
    while (i >= 0) {
        console.log(i)
        i--
    }
}


// logs each number when counting down, starting from the number provided