
/*2- con if
ingresar el nombre y los datos requeridos
 para calcular el IMC , e informar a la persona
  si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/
function mostrar()
{
	var kg;
	var altura;
	var nombre;
	var alturaAlcuadrado
	var imc;

	
	nombre = txtIdEdad.value;
	kg = prompt("peso en kg")
	altura = prompt("altura en metros");
	kg = parseInt(kg);
	altura = parseFloat(altura);

	alturaAlcuadrado = altura * altura;
	imc = kg / alturaAlcuadrado;
	console.log(imc);


	if(imc < 19.5)
	{
		alert("bajo peso");
	}

	else
	{
		if(imc < 25.9)
		{
			alert("peso normal");
		}	

		else
		{
			if(imc > 30)
			{
				alert("obesidad");
			}

			
		}
	}
			

	
}