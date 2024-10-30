let lado1 = 10
let lado2 = 4
let lado3 = 9

if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
    console.log ("equilátero")
} else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    console.log ("isósceles")
} else {
    console.log ("escaleno")
}