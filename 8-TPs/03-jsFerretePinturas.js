/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
De Pazos Agustin ejercicio 3 tp3 */
function FahrenheitCentigrados () 
{
	var temperaturaf
	var gradoc

temperaturaf = txtIdTemperatura.value;

temperaturaf = parseInt(temperaturaf);

gradoc = temperaturaf -32;




alert (" usted tiene " + gradoc );








}

function CentigradosFahrenheit () 
{
	var temperaturaf;
	var gradosc;

	gradoc = txtIdTemperatura.value;
    gradoc = parseInt(gradoc);


	temperaturaf = gradoc + 32;

	alert( " usted tiene " + temperaturaf);


}


//txtIdTemperatura