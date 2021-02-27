/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10-  */

function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var maximoNegativo;
	var minimoPar;


	//no se necesita banderas porque ya hay contadores


	respuesta = "si";
	acumuladorNegativos = 0;
	acumuladorPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;


	while(respuesta == "si")
	{
		
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("eror reingrese otro numero");
			numeroIngresado = parseInt(numeroIngresado);
			
		}



		if(numeroIngresado<0)
		{
			if(cantidadNegativos == 0 || numeroIngresado>maximoNegativo)//document.write negativo postivo falta
			{
				maximoNegativo = numeroIngresado;
			}
			
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			cantidadNegativos++;
		}
		else
		{
			if(numeroIngresado>0)
			{
				acumuladorPositivos = acumuladorPositivos + numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		
		}
		
		if(numeroIngresado%2== 0 )
		{
			if(numeroIngresado<minimoPar || cantidadPares == 0)//primer par
			{
				minimoPar = numeroIngresado;	
			}

			cantidadPares++;
		

		}

		respuesta=prompt("desea continuar?");	
		

	}
	diferenciaPositivosNegativos = acumuladorPositivos + acumuladorNegativos;//falta documen.write
	

	document.write("la suma de negativos es :"+acumuladorNegativos+"<br>");
	document.write("la suma de negativos es :"+acumuladorPositivos+"<br>");
	document.write("la suma de negativos es :"+cantidadPositivos+"<br>");
	document.write("la suma de negativos es :"+cantidadNegativos+"<br>");
	document.write("la suma de negativos es :"+cantidadCeros+"<br>");
	document.write("la suma de negativos es :"+cantidadPares+"<br>");
	
	


if(cantidadPositivos != 0)
	{
		promedioPositivos = acumuladorPositivos / cantidadPositivos;
		document.write("la suma de negativos es :"+promedioPositivos+"<br>");
	}
	else
	{
		document.write("no hubo ingreso de positivos");
	}
	if(promedioNegativos != 0)
	{
		promedioNegativos = acumuladorNegativos / cantidadNegativos;
		document.write("la suma de negativos es :"+promedioNegativos+"<br>");
	}	
	else
	{
		document.write("no hubo negativos"+ "<br>");
	}
}

