/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
De pazos Agustín Ejercicio 7
*/ 
function sumar()
{	
    var num1;
    var num2;
    var suma;
    
  
    num1 = txtIdNumeroUno.value;
    num2 = txtIdNumeroDos.value;

    
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    suma = num1 + num2;

    alert ("la suma es " + suma);
	
}

function restar()
{

    var num1;
    var num2;
	var resta;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

	resta = num1 - num2;


	alert("el resultado es " + resta);
}

function multiplicar()
{ 

  var num1;
  var num2;
  var multiplicar;

  num1 = txtIdNumeroUno.value;
  num2 = txtIdNumeroDos.value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);
  
  multiplicar = num1 * num2;

  alert ("el resultado es " + multiplicar);

	
}

function dividir()
{
	var num1;
	var num2;
	var dividir;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	dividir = num1 / num2;

	alert ("el resultado es " + dividir);
}