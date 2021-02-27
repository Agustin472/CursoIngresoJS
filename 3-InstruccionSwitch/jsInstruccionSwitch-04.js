function mostrar()
{
	//tomo el mes
	var mesDelAno =txtIdMes.value;
	

	switch (mesDelAno){
		case "Febrero":
			alert("tiene 28 dias");
			break;
		case "Diciembre":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("tiene 31 dias");
			break;
		default: 
			alert("tiene 30 dias");
			



	
	

}

}//FIN DE LA FUNCIÓN