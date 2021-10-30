
// var sign = prompt("What's your name?");
// alert("Hello " + sign + " welcome to the Jungle!!");

// var age = prompt("What's your age?");

// if(age>=18){

//     alert("Congratulations, you are "+ age + " years old, you can drive!")
// }
// else{
//     alert("You can't drive you are " + age + " years old and you can't continue, see you!")
//     window.close()
// }


// alert("Next!!")

var grades = prompt ("What's your grades?")


if(grades >= 0 && grades <= 3 ){

    alert("Very poor!")
}
if(grades == 3 || grades <= 5  ){

    alert("Not Enough!")
}
if(grades == 5 || grades == 6  ){

    alert("Enough!")
}
if(grades == 6 || grades == 7  ){

    alert("Good!")
}
if(grades == 8 || grades == 9  ){

    alert("Very Good!")
}
if(grades == 9 || grades == 10  ){

    alert("Excellent!")
}
else if(grades > 10 ){
    alert("Error!!!")
}
