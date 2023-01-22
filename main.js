/**Ciclos/Bucles/Iteraciones**/

//¿Que es un ciclo y para que sirve?
//Los ciclo son herramientas que nos permiten repetir un bloque de instrucciones cierta cantidad de veces y que sea controlada por el programador

//cilos por conteo: va a ir sumando una unidad por cada vuelta y cuando llega a un cierto tope que le marcamos deja de iterar (for)

//ciclos condicionales: va a iterar hasta que se cumpla la condicion (while, do while)

/*CICLO FOR*/
//lO VAMOS A USAR CUANDO SE LA CANTIDAD DE VECES O REPETICIONES QUE DEBE TENER MI CODIGO 

//Sintaxis:
/**
 for (desde;hasta;actualizacion){
    codigo de ejecucion
 }
 */

 //Ejemplo A: quiero mostrar hola mundo por consola

 console.log("Ej A: ")
 for(let i=0; i<10; i=i+1){
    console.log("hola mundo");
 }

 //Ejemplo B: quiero que comience a contar desde 1 e INCLUYA AL 10

 console.log("ejemplo B: ")

 for(let i=1; i<10; i=i+1){
    console.log(i);
 }

 //Ejemplo C: Decrece, que cuente desde 10 hasta 0

 console.log("ejemplo C");
 for(let i=10; i>=0; i=i-1){
    console.log(i)
 }

 //Ejemplo D: mostrar por consola los numeros pares entre 0 y 10

 console.log("ejemplo D");
 for (let i=0; i<=10; i=i+2){
    console.log(i)
 }

 /**Ejemplo E

 console.log("ejemplo E");

 let passwordUser= parseInt(prompt("Ingrese su contraseña"));
 const passwordAuth= 1234;

 for(let i=0; i<2; i++){
    if(passwordUser==passwordAuth){
        console.log("Su contraseña es correcta, accede al sistema");
        break;
    }
    else{
        passwordUser=parseInt(prompt("Su contraseña es incorrecta, intente otra vez"));
    }
 }
 */

 //Ejmplo F: continue=> cuando bajo cierta condicion el ciclo saltear una repeticion sigue con la proxima.
 //Mostrar numeros del 0 al 6 salteando los primeros pares
//modulo: % retora el resto de una division, si el resto es cero el numero es par, de lo contrario es impar.

console.log("Ejemplo G")

for(let i=0; i<=6; i=i+1){
    if(i%2==0){
        continue;
    }
    console.log(i)
}

//Ejemplo G
//Es un ciclo que se ejecuta mientras la condicion evaluada sea correcta

alert("ejemplo G")

let nombre=("Ingresa un nombre: (para salir ingrese salir)");

while(nombre!="salir"){
    console.log(nombre);
    nombre=prompt("Ingrese un nombre: (para salir ingrese salir)");
}

//do while
//la diferencia con el while es que este se ejecuta al menos una vez

alert("Ejemplo H")
const passAutorizado= 1235;
let passwordUsuario;

do{
    passwordUsuario=prompt("Ingrese su password")

}while (passwordUsuario!=passAutorizado)

//switch
//esta diseñada para manejar multiples condiciones sobre la misma variable y despues de la condicion de la variable se va a ejecutar determinado codigo

let clima= prompt("Ingrese el clima actual en su ciudad");

switch(clima){
    case"lluvia":
        console.log("Quedate viendo netflix");
        break;

    case "nublado":
        console.log("haz una carne asada");
        break;
    
    case "frio":
        console.log("vete a dormir");
        break;
        default:
            console.log("ve a aprender climas");
            break;

    
}
