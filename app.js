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
let x = 1;
do{
    if (x % 2 != 0){
        console.log(x);
    }
    x++
}while(x < 100);

console.log("EXERCISE 3 While :\n==========\n");

let a = 1;
while(a <= 100 ){
    if (a % 3 == 0 && a % 5 == 0){
        console.log("FIZZBUZZ")
    }
    else if (a % 3 == 0){
        console.log("FIZZ")
    }
    else if (a % 5 == 0){
        console.log("BUZZ")
    }
    else{
        console.log(a)
    }
    a++
}

console.log("EXERCISE 3 Do/While :\n==========\n");

let z = 1
do{
    if (z % 3 == 0 && z % 5 == 0){
        console.log("FIZZBUZZ")
    }
    else if (z % 3 == 0){
        console.log("FIZZ")
    }
    else if (z % 5 == 0){
        console.log("BUZZ")
    }
    else{
        console.log(z)
    }
    z++
} while(z <= 100)


console.log("EXERCISE 4 :\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(let i = 1; i <= n; i++){
    if(i == value){
        console.log(`Found ${value}!`)
        break;
    }
    if(i == n) {
        console.log(`Did not find ${value} within 1-${n}.`)
    }
    
}
