function mostrar()
{
	var estacionIngresada
	var destino
	var seViaja
	var noSeViaja


		

	
	estacionIngresada = txtIdEstacion.value;
	destino = txtIdDestino.value;


	switch(estacionIngresada){
		case "Invierno":
		if(destino == "Bariloche")
		{
			alert("se viaja");
		}
		else
		{
			alert("no se viaja")
		}
			break;
		case "Verano":
		if(destino == "Mar del plata" || destino == "Cataratas")
		{
			alert("se viaja");
		}
		else
		{
			alert("no se viaja");
		}			

			break;
		case "Otoño":
		if(destino)
			alert("se viaja");
			break;
		case "Primavera":
		if(destino == "Bariloche")
			alert("no se viaja");
		else
		{
			alert("se viaja");
		}


		}


	


}//FIN DE LA FUNCIÓN