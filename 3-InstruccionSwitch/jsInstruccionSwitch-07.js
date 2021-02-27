function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	

	switch(destinoIngresado){
		case "Bariloche":
			alert("oeste");
			break;
		case "Mar del plata":
			alert("este");
			break;
		case "Ushuaia":
			alert("sur");
			break;
		default:
			alert("Norte");
	}
}





/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/