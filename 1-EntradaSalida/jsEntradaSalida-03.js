/* 
1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.
De Pazos Agustín  htm3 ej 3 clase de apoyo sabado */
function mostrar()
{
	var descripcion;
	var precioProducto;
	var aumento;
	var porcentajeAumento;
	var resultado;
	


	descripcion = prompt("nombre del producto");

	precioProducto = txtIdNombre.value;
   
    precioProducto = parseInt(precioProducto);

    aumento = 30;
   
    porcentajeAumento = precioProducto * aumento /100;

    resultado = precioProducto + porcentajeAumento;

    txtIdNombre.value = resultado;

}
