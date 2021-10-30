let n = prompt ('Introduzca la cantidad de calificaciones a capturar')

let a = 1

let cont= 0 ;

while ((a-1)< n ){

    let grade = prompt("Calificacion NO. " + a)
    gradeInt= parseInt(grade, 10);
    cont = cont + gradeInt;
    a++;

}

let prom= cont/5;

alert ("Tu promedio final es: "+ prom);