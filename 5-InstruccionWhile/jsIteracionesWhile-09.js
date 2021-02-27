 /*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
De Pazos Agustín  1H 9BIS*/
//se pide el menor de los pares y el mayor de los negativos
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var maximoNumero;
	var minimoNumero;
	var respuesta;
	var bandera;
	var modulo;
	var banderaPar;
	var banderaNegativo;

	//bandera

	respuesta = "si";
	bandera = "es el primero numero";
	banderaPar = "es numero primer par";

	//respuesta = "si";  //ESTA MAL
	//maximoNumero = -1000;
	//minimoNumero = 1000;

	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		
		if(bandera == "es el primer numero" || (numeroIngresado < maximoNumero && ((numeroIngresado 2%) == 0) && numeroIngresado > 0))
		{
			maximoNumero = numeroIngresado

		}
		
		if(bandera == "es el primer numero" || numeroIngresado > m && 


		/*if(bandera == "es el primero numero" || numeroIngresado > maximoNumero)
		{
			maximoNumero = numeroIngresado;
		}	

		if(bandera == "es el primero numero" || numeroIngresado < minimoNumero)
		{
			minimoNumero = numeroIngresado;
			bandera = "no es el primero numero";			
		}
		

		/*if(bandera == "es el primer numero")
		{
			maximoNumero = numeroIngresado;
			minimoNumero = numeroIngresado;
			bandera = "no es el primer numero";
		}
		else
		{
			
			if(numeroIngresado > maximoNumero)
			{
				maximoNumero > numeroIngresado;
			}
			if(numeroIngresado < minimoNumero)
			{
				minimoNumero = numeroIngresado;
			}
		}
		
		respuesta = prompt("desea ingresar otro numero");
	}*/
	respuesta = prompt("desea seguir");


	txtIdMinimo.value = minimoNumero;

		
}

	
	
	txtIdMaximo.value = maximoNumero;
	
}