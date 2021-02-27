/* 
1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.
De Pazos Agustín  */
function mostrar()
{
	var precioProducto;
	var descripcion;
	var porcentajeAumento;
	var resultado;
	var aumento;


	descripcion = prompt("nombre del producto");

	precioProducto = prompt("ingrese el valor del producto");
   
    precioProducto = parseInt(precioProducto);

    aumento = 30;
   
    porcentajeAumento = precioProducto * aumento /100;

    resultado = precioProducto + porcentajeAumento;

    txtIdNombre.value = resultado;

}

