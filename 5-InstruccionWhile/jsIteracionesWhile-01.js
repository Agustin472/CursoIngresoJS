/*
Ingresar 5 numeros, y determinar la cantidad de 
numeros que son mayores que 10 y menores 20 
 Mismo ejercicio, pero no se cuantos 
 numeros se ingresan. (Lo decide el usuario).
  Mostrar tambien el promedio de los numeros 
 que cumplen la condicion
de Pazos Agustin 1H clase de repaso sabados*/ 
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var acumulador;
	var contadorDos;
	var promedio;
	var contador;


	contador = 0;
	contadorDos = 0;
	respuesta = "si";
	acumulador = 0;
	

	while(respuesta == "si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("desea continuar");


		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contador++;
			acumulador = acumulador + numeroIngresado;
			contadorDos++;
		}
		

	}

	console.log(contadorDos);
	promedio = acumulador/contador;
	alert("promedio es "+ promedio);
}
