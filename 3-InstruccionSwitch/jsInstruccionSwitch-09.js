function mostrar()
{
	var estacionIngresada
	var destino
	var tarifa
	var descuento
	var aumento
	var calculo

	estacionIngresada =txtIdEstacion.value;
	destino = txtIdDestino.value;

	tarifa = 15000;
	descuento = 0;


	switch(estacionIngresada){
		case "Invierno":
		if(destino == "Bariloche")
	
		{
			aumento = 1.2;
		}
		else
		{
			if(destino == "Cordoba" || "Cataratas")

			{
				descuento = 0.2;
			}
		
			else
			{
				descuento = 0.1;
			}
	
		}
			break;
		case "Verano":
		if(destino == "Bariloche")
		{
			descuento = 0.2;
		}
		else
		{
			if(destino == "Mar del plata")
			{
				aumento = 1.2;
			}

			else
			{
				aumento = 1.1;
			}

		}
			break;

		case "Primavera":
		case "Otoño":
		if(destino == "Cordoba")
		{
			calculo = tarifa;
		}

		else
		{
			aumento = 1.1;
		}
			
			break;

		}
		




		if(descuento)
		{
				calculo = tarifa - (descuento * tarifa);


		}

		else
		{
			if(aumento)

		{	
			calculo = tarifa * aumento;

		}
					
		}
	
	alert(calculo + " resultado");

}