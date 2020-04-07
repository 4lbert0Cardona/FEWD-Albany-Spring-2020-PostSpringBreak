//FizzBuzz//
//for each number from 1 through 100
//if the number is divisible by 3 console.log "Fizz"
//if the number is divisible by 5 console.log "Buzz"
// if the number is divisible by both console.log 'Fizzbuzz'

// for(var i = 0; i < 100; i++){
//     if(i % 3 === 0 ) {
//         console.log ("Fizz")
//     }
// }

// for(var i = 0; i < 100; i++){
//     if(i % 5 === 0 ) {
//         console.log ("Buzz")
//     }
// }

// for(var i = 0; i < 100; i++){
//     if(i % 3 === 0, i % 5 === 0 ) {
//         console.log ("FizzBuzz")
//     }
// }


for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ": FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + ": Fizz")
    }
}