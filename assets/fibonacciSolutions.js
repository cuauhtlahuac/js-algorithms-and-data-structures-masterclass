const number = 40

function fibonacci(num) {
     if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(number))


function fibonacciWhileLoop(num) {
    var a = 1, b = 0, temp;
    while (num >= 0) {
        temp = a;
        //        console.log("temp = " + temp)
        a = a + b;
        //        console.log("A:" + a)
        b = temp;
        //        console.log("B: " + b)
        num--;
        //        console.log("NUM: " + num)
    }

    return "WHILE LOOP RES: " + b;
}

console.log(fibonacciWhileLoop(number))

//WHILE DESKTOP TEST
// Temp | a  |   b   | num |
//      | 1  |   0   |  5  | init val
//--------------------------
//   1  | 1  |   1   |  4  | First loop
//   1  | 2  |   1   |  3  | Enter first condition
//   2  | 3  |   2   |  2  |
//   3  | 5  |   3   |  1  |
//   5  | 8  |   5   |  0  |
//   8  | 13 |   8   | -1  | Enter final condition Last Loop

function fibonacciForLoop(num) {
    let c = 1, d = 0, tempf;
    for (let i = 0; i <= num; i++) {
        //        console.log("\ni = " + i + "\n")
        tempf = c;
        //        console.log("temp = " + tempf)
        c = c + d;
        //        console.log("c = " + c)
        d = tempf;
        //        console.log("d = " + d)
    }
    return "FOR LOOP RES: " + d
}

console.log(fibonacciForLoop(number))

//MY FIBONACCI
//tomar un numero
var arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
//Regresar el valor que corresponde al index
//console.log(arr[11]);
function fibo(x) {
    if (x < 2 ) {
        return x;
    } else
    var a = 1;
    var b = 1;
    var c;
    for (i = 1; i < x; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return "MY FIBO PROGRAM :) " + c;
}

console.log(fibo(number))