/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
	var respuesta;
	var arena;
	var cal;
	var cemento;
	var cantidadDeBolsas;
	var PrecioPorBolsa;
	var tipoDeProducto;
	var contadorArena;
	var contadorCal;
	var contadorCemento;
	var acumuladorArena;
	var acumuladorCemento;
	var acumuladorCal;
	var acumuladorBolsas;
	var descuento;
	var precioConDescuento;
  

	contadorCemento = 0;
	contadorCal = 0;
	contadorArena = 0;
	acumuladorCal = 0;
	acumuladorCemento = 0;
	acumuladorArena = 0;
	cal = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
	  	tipoDeProducto = prompt("ingrese su producto");
	  	tipoDeProducto = parseInt(tipoDeProducto);
	  	while(isNaN(tipoDeProducto) == false || tipoDeProducto != "cemento" && tipoDeProducto != "cal" && tipoDeProducto != "arena")
	  	{
	  		prompt("reingrese el prodcuto");
	  	}
	  	cantidadDeBolsas = prompt("ingrese cantidad de bolsas");
	  	cantidadDeBolsas = parseInt(cantidadDeBolsas);
	  	while(isNaN(cantidadDeBolsas) == true || cantidadDeBolsas < 1)
	  	{
	  		cantidadDeBolsas = prompt("cantidad de bolsas invalido");
	  	}
	  		PrecioPorBolsa = prompt("ingrese el valor");
	  		PrecioPorBolsa = parseInt(PrecioPorBolsa);
	  	while(isNaN(PrecioPorBolsa) == true || PrecioPorBolsa < 1);
	  	{
	  		PrecioPorBolsa = prompt("precio invalido reingrese su precio");
	  	}

		if(cantidadDeBolsas > 0 && cantidadDeBolsas < 31)
		{
			descuento = 0.20;
		}
		else
		{
			descuento = 0.25;
		}	



		switch(tipoDeProducto)
		{
			case "cal":
			{
				acumuladorCal = acumuladorCal + cantidadDeBolsas;
			}
		
		}
		acumuladorBolsas = acumuladorBolsas + cantidadDeBolsas;


	  	respuesta = prompt("Quiere ingresar mas veces si/no");


	}



precioConDescuento =  ((PrecioPorBolsa * cantidadDeBolsas) * descuento);

}
