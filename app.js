console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i<= 100; i++){
    if (
        i % 2 != 0        
    )
    console.log(i)
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i<= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ")
    }
    else if (i % 3 == 0){
        console.log("FIZZ")
    }
    else if (i % 5 == 0){
        console.log("BUZZ")
    }
    else{
        console.log(i)
    }
}
console.log("EXERCISE 3 while :\n==========\n");

//Exercise 3 Section
    // Exercise 1

let i = 1

while( i <= 100){
    console.log(i)
    i += 2
}

console.log("EXERCISE 3 DO/WHILE :\n==========\n");

do{
    if (i % 2 != 0){
        console.log(i)
    }
    i++
}while(i <= 100)

console.log("EXERCISE 3 While :\n==========\n");

while(i <= 100 ){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ")
    }
    else if (i % 3 == 0){
        console.log("FIZZ")
    }
    else if (i % 5 == 0){
        console.log("BUZZ")
    }
    else{
        console.log(i)
    }
    i++
}

