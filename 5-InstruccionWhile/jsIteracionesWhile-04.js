/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
De Pazos Agustin 1H */
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("inregrese un numero del 0 y 10");
	numeroIngresado = parseInt(numeroIngresado);


	while(numeroIngresado > 9 || numeroIngresado < 0)
	{
		
		numeroIngresado = prompt("reingrese un numero del 0 y 10");

	}




}//FIN DE LA FUNCIÓN