function mostrar()
{
	var destinoIngresado =txtIdDestino.value;


	switch(destinoIngresado){
		case "Mar del plata":
		case "Cataratas":
			alert("hace calor");
			break;
		default:
			alert("hace frio");
	}

}

/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/