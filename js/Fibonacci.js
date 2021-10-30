//Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let sucesion =  (n) => {
    let a = 0, b=1 , c, d = 1;
    document.write(a +" + "+ b + " + ") 

    for(i = 3; i<= n; i++){
        c = a + b;
        document.write(c + " + ");
        d = d + c;
        a = b;
        b = c;
    }
}
var add_number = prompt("Add the number for Fibonacci");
sucesion(add_number);