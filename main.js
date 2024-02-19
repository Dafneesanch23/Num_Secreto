
/*Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.
Puedes implementar un tipo de ayuda para que el usuario se guíe en caso de que el número introducido sea menor o mayor al número secreto.*/



let numRandom = Math.floor(Math.random() * 101);
let intentos = [];
let acierto = false;

while (acierto == false){

    let number = parseInt(prompt("Elige un número del 1 al 100"));

    if (!isNaN(number)) {
        adivinaNum(number);
    } else { 
        alert("Por favor, ingrese un número válido");
    }
}
    
function adivinaNum(number){

    intentos.push(number);

    if (numRandom == number){
        console.log(`Felicidades, adivinaste el número secreto es ${number}`);
        acierto = true;
    } else if (numRandom > number){
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo." + "\nPista: El número secreto es mayor al ingresado");
    } else if (numRandom < number){
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo." + "\nPista: El número secreto es menor al ingresado");
    }

    console.log("Números ingresados80: " + intentos.join(", "));
}

