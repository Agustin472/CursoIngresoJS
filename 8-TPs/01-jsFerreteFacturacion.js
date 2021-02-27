/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
De Pazos Agustín Ejercicio 1 tp 3
*/
function Sumar () 
{
  var preciouno;
  var preciodos;
  var preciotres;
  var resultado;

  preciouno = txtIdPrecioUno.value;

  preciodos = txtIdPrecioDos.value;

  preciotres = txtIdPrecioTres.value;

  preciouno = parseInt(preciouno);

  preciodos = parseInt(preciodos);

  preciotres = parseInt(preciotres);


  resultado = preciouno + preciodos + preciotres;

  alert("su resultado es " + resultado );




}
function Promedio () 
{
	
  var preciouno;
  var preciodos;
  var preciotres;
  var promedio;


  preciouno = txtIdPrecioUno.value;

  preciodos = txtIdPrecioDos.value;

  preciotres = txtIdPrecioTres.value;

  preciouno = parseInt(preciouno);

  preciodos = parseInt(preciodos);

  preciotres = parseInt(preciotres);

  promedio = (preciouno + preciodos + preciotres) / 3;

  alert (" el promedio es " + promedio);



}
function PrecioFinal () 
{
	
  var preciouno;
  var preciodos;
  var preciotres;
  var preciofinalconiva;
  var preciofinalmasiva;



  preciouno = txtIdPrecioUno.value;

  preciodos = txtIdPrecioDos.value;

  preciotres = txtIdPrecioTres.value;

  preciouno = parseInt(preciouno);

  preciodos = parseInt(preciodos);

  preciotres = parseInt(preciotres);

  preciofinalconiva = (preciouno + preciodos + preciotres) *21/100

  preciofinalmasiva = preciofinalconiva + preciouno + preciodos + preciotres;

  

  alert (" el promedio es " + preciofinalmasiva);


}

//txtIdPrecioUno

//txtIdPrecioDos
//txtIdPrecioTres