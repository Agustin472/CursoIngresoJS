/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
De Pazos Agustin Tp 2 Ejercicio 2   */

function Rectangulo () 
{
  var largoterreno;
  var anchoterreno;
  var cantidaddealambre

  largoterreno = txtIdLargo.value;

  anchoterreno = txtIdAncho.value;

  largoterreno = parseInt(largoterreno);
  anchoterreno = parseInt(anchoterreno);

  cantidaddealambre = (2 * largoterreno + 2 * anchoterreno) * 3;

alert ("cantidad alambre"+ cantidaddealambre);

}
function Circulo () 
{
	
 var radio;
 var cantidad;
 
 radio = txtIdRadio.value;

 radio = parseInt(radio);

 cantidad = (radio * 2 * Math.PI) * 3;
 cantidad = cantidad.toFixed(3);





 alert(" alambre necesario " + cantidad + " mts " );


}
function Materiales () 
{ 
  

  var largoterreno;
  var anchoterreno;
  var area;
  var bolsasdecemento;
  var bolsasdecal;


  largoterreno = txtIdLargo.value;

  anchoterreno = txtIdAncho.value;

  largoterreno = parseInt(largoterreno);
  anchoterreno = parseInt(anchoterreno);

  area = largoterreno * anchoterreno;

  bolsasdecemento = area * 2;

  bolsasdecal = area * 3;

  alert("necesita  " + bolsasdecemento + " bolsas de cemento" + " necesita " + bolsasdecal + " bolsa de cal " );


}




//txtIdLargo

//txtIdAncho

//txtIdRadio