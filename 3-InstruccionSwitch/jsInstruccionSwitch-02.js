/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
De Pazos Agustin 1H Ejercicio 2 switch*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	

	switch (mesDelAño){
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio, ahora calor.");
			break;
		case "Abril":
		case "Mayo":
			alert("falta para el invierno");
			break;
	    default:
			alert("Abrigate que hace frio.");
			break;
		




}
}