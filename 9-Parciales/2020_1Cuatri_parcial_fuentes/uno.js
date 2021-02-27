
/*file:///C:/Users/Agustin/Desktop/CursoIngresoJS/9-Parciales/2020_1Cuatri_parcial_fuentes/uno.html
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	var contador;
	var tipoDeProducto;
	var barbijo;
	var jabon;
	var alcohol;
	var marcaIngresada;
	var fabricante;
	var tipoProductos;
	var precioIngresado;
	var cantidadUnidades;
	var acumuladorAlcohol;
	var contadorAlcohol;
	var acumuladorAlcoholBarato;
	var fabricanteAlcoholBarato;
	var acumuladorJabon;
	var contadorJabon;
	var contardorBarbijo;
	var acumuladorBarbijo;
	var alcoholBarato;
	var tipoConMasUnidades;
	var promedioFinalUnidades;
	var tipoDeProDuctosB;
	var contadorAlcoholBarato;
	contadorAlcoholBarato = 0;
	acumuladorAlcohol = 0;
	acumuladorAlcoholBarato = 0;
	acumuladorJabon= 0;
	contadorJabon = 0;
	contardorBarbijo = 0;
	acumuladorBarbijo = 0;
	tipoDeProducto = 0;
	contador = 0;
	contadorAlcoholBarato = 0;
	contadorAlcohol = 0;


	
	while(contador < 2)
	{	
		tipoProductos = prompt("inegrese su producto: barbijo, alcohol o jabon");
		
		while(isNaN(tipoProductos)== false || tipoProductos != "barbijo" && tipoProductos!= "jabon" && tipoProductos != "alcohol")
		{
			tipoProductos = prompt("reingrese un producto valido");
		}
		
		precioIngresado = prompt("ingrese el precio");
		precioIngresado = parseInt(precioIngresado);

		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("reingrese su valor");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadUnidades = prompt("ingese la cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(isNaN(cantidadUnidades) == true || cantidadUnidades < 1 ||cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Cantidad invalidad reingrese entre 1 y 1000");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marcaIngresada = prompt("ingrese su marca");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("reingrese la marca");
		}
		
		fabricante = prompt("ingrese fabricante");
		while(isNaN(fabricante)== false)
		{
			fabricante = prompt("reingrese el nombre");
		}


		switch(tipoProductos)
		{
			case "alcohol":

			acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
			contadorAlcohol++;
			if(contadorAlcoholBarato == 0 || precioIngresado < alcoholBarato)
			{
			
				AlcoholBarato = precioIngresado;
				acumuladorAlcoholBarato = cantidadUnidades;
				fabricanteAlcoholBarato = fabricante;
				contadorAlcoholBarato++;
				
			}

				break;

			case "jabon":
			{
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				contadorJabon++;


			}
				break;
			case "barbijo":
			{
				acumuladorBarbijo = acumuladorBarbijo + cantidadUnidades;
				
				contardorBarbijo++;
			}
				break;
		
		}


		contador++;

	}


	if(acumuladorBarbijo > acumuladorAlcohol && acumuladorJabon)
	{
		promedioFinalUnidades = acumuladorBarbijo / contardorBarbijo;
		tipoDeProDuctosB = "barbijo";
	}
	else
	{
		if(acumuladorAlcohol > acumuladorBarbijo && acumuladorJabon)
		{
			promedioFinalUnidades = acumuladorAlcoholBarato / contadorAlcohol;
			tipoDeProDuctosB = "alcohol";
			
		}
		else
		{
			promedioFinalUnidades = acumuladorJabon / contadorJabon;
			tipoDeProDuctosB = "jabon";
		}	
	}


		
	 

	document.write(acumuladorAlcohol + "alcol barato" + fabricanteAlcoholBarato +"<Br>");
	document.write("el promedio es "+ promedioFinalUnidades +  tipoDeProDuctosB +"<Br>");
	document.write("" + acumuladorJabon +" cantidad de jabon" + "<Br>");



}	
	



	  /*

		repetir (5 veces)
	
		pido tipo(validar)

		pido precio (validar)

		pido cantidad(validar)

		a) del mas barato de los alcoholes, la cantidad de unidades y fabricante
		si es alcohol y si es el mas barato

		guardar la cantidad de unidades y fabricante

		mas unidades promedio por compra
		

		acumular la cantida de productos en funcion al tipo (swith 
	


	  termino de repetir


		b) comparar los tres acumuladores para saber cual es el mayor

			if
		acumuladorBarbijos acumulador jabones acumuladoralgodon
		termino de repetir
		b) comparar las
		
	
	  */














	