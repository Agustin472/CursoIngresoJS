/*
Pedirle al usuario por prompt 3 números, 
luego sumarlo y mostrar la suma de los mismos
 por pantalla en un alert*/
function mostrar()
{
	var ValorUno
	var ValorDos
	var ValorTres
	var total

	ValorUno = prompt("ingrese un valor");
	ValorDos = prompt("ingrese su valor");
	ValorTres = prompt("ingrese su valor");

	ValorUno = parseInt(ValorUno);
	ValorDos = parseInt(ValorDos);
	ValorTres = parseInt(ValorTres);

	total = ValorUno + ValorDos + ValorTres;

	alert("la suma es " + total);




}

