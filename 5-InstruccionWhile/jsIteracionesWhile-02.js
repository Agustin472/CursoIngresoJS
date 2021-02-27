/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
de Pazos Agustin 1H while 2*/
function mostrar()
{
	var i

	//i = 11;
	i=10;

	while(i>0)
	{
		console.log (i + "-");

		i = i - 1;
		
		



		//i = i + 1;

		//console.log(i +"-");
		//console.log((i-1) + "-");

		//i = i - 1; //

	

	}



}
/*
Gomez Federico 1H
9bis
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
se pide el menor de los pares y el mayor de los negativos*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var banderaNegativa;
	var banderaPar;

	var numeroIngresado;

	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	var menorPares;
	var pares;

	var mayorNegativo;



	//iniciar variables
	banderaPar = true;
	banderaDelPrimero = true;
	banderaNegativa = true;
	respuesta = 'si';


	/*numeroMaximo = -1000;		//Nunca inicializar maximos y minimos 
	numeroMinimo = 1000;*/      


	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero; ");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == true || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(banderaDelPrimero == true || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}

		//el numero menor par 
		if(banderaPar == true || numeroIngresado % 2 == 0) 
		{
			console.log("entro al primer if")
			if(numeroIngresado < menorPares || banderaPar == true)
			{
				console.log("entro al segundo if")
				menorPares = numeroIngresado;
				console.log(menorPares);
			}
			
			banderaPar = false;
		}
		else
		{
			if(menorPares == undefined)
			{
				menorPares = "No hay par";
			}
			
		}


		//Mayor negativo
		if(numeroIngresado < 0 || banderaNegativa == true)//Si es un numero menor a 0 o bandera negativa es true
		{
			console.log("entro al primer if negativo");
			if(numeroIngresado > mayorNegativo || banderaNegativa == true)//Si el numero ingresado es mayor a mayor negativo o bandera negativa es true
			{
				console.log("entro al segundo if negativo");
				mayorNegativo = numeroIngresado;
				console.log("numeroIngresado"+numeroIngresado+" mayorNegativo:"+mayorNegativo);
				banderaNegativa = false //cambio bandera negativa
			}
		}
		else
		{
			if(mayorNegativo > 0)
			{
				mayorNegativo = "No hay negativos"
			}
		}

		respuesta=prompt("desea continuar? 'si'/'no'");
	}
	alert("El numero menor par es:" + menorPares);
	alert("El mayor negativo es: " + mayorNegativo);

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN