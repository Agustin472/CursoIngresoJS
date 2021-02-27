/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var cantidad;
	cantidad = 0;



	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750")
	{	
		cantidad++;
		claveIngresada = prompt("Error, ingrese su clave");
		

		if(cantidad > 1)
		{
			alert("su cuenta fue bloqueada");
		}


	}

	alert("ingreso bien");

}//FIN DE LA FUNCIÓN
