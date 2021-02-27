/*
2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto ,
 tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted 
  compro un XXXXXX con XX % de descuento, el precio final es XXXX"
  De Pazos Agustín Clase de apoyo ej 10*/
function mostrarAumento()
{
	var nombreProducto;
	var porcentaje;
	var importe;
	var porcentajeDescuento;
	var resultado;


	importe = txtIdImporte.value;

	importe = parseInt(importe);

	nombreProducto = prompt("que quiere comprar");
	
	porcentaje = prompt("ingrese el de % descuento");

	porcentaje = parseInt(porcentaje);

	porcentajeDescuento = importe * porcentaje / 100;

	resultado = importe - porcentajeDescuento;


	txtIdResultado.value = (" usted compro " + nombreProducto + ",con un " + porcentaje + " % de descuento. " + "El precio final es " + resultado);











}




