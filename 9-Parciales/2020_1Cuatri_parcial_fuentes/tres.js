/*1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.X
B. Cantidad total de mujeres que cursan la carrera de programaciónX
C. Cantidad de alumnos no binarios.x
D. Promedio de notas de los alumnos finalizantes.x
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.x
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
de Pazos Agustin 1H*/
function mostrar()
{
	var respuesta;
	var nombreAlumno;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;
	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDiseñoGrafico;
	var contadorProgramacionF;
	var contadorSexoNoBinario;
	var contadorFinalizantes;
	var acumuladorFinalizantes;
	var promedio;
	var maximaedad;
	var nombreAlumnoViejo;
	var sexoEdadViejo;
	var maximaNota;
	var nombreAlumnoMejor;
	var edadAlumnoMejor;
	var estadoCarreraMejor;
	var carreraMasAlumno;



	respuesta = "si"
	contador = 0;
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorDiseñoGrafico = 0;
	contadorProgramacionF = 0;
	contadorSexoNoBinario = 0;
	contadorFinalizantes = 0;
	acumuladorFinalizantes = 0;
	nombreAlumnoMejor = 0;
	nombreAlumnoViejo = 0;



	while(respuesta == "si")
	{
		
		nombreAlumno = prompt("ingrese su nombre");
		
		while(isNaN(nombreAlumno) == false)
		
		{
			nombreAlumno = prompt("no es un nombre");
		}
		
		

		carrera = prompt("ingrese su carrera");
		
		while(isNaN(carrera) == false || carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico") 
		{
			carrera = prompt("eliga una carrera entre. programacion/psicologia/diseño grafico ");
		}

		estadoCarrera = prompt("estado de la carrera");
		while(isNaN(estadoCarrera)== false || estadoCarrera != "en curso" && estadoCarrera != "finalizo" && estadoCarrera != "abandono")
		{
			estadoCarrera = prompt("reingrese su estado. en curso / finalizo / abandono");
		}
		sexo = prompt("ingrese su sexo f o m");
		
		while(isNaN(sexo)== false || sexo != "f" && sexo != "m" && sexo != "no binario")
		{
			sexo = prompt("reingrese su sexo f/m");
		}
		edad = prompt("ingrese su edad")
		edad = parseInt(edad);
		while(isNaN(edad)== true || edad < 18)
		{
			edad = prompt("reingrese su edad mayor a 18");
		}
		nota = prompt("ingrese su nota");
		nota = parseInt(nota);
		while(isNaN(nota)== true || nota < 1 || nota > 10)
		{
			nota = prompt("reingrese su nota");
		}

		/*Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.*/
		switch(carrera)
		{
			case "programacion":
				contadorProgramacion++;
				if(sexo == "f" && estadoCarrera == "en curso")
				{
					contadorProgramacionF++;
				}

				break;
			
			case "psicologia":
				if(edad > maximaedad || contadorPsicologia == 0)
				{
					maximaedad = edad;
					nombreAlumnoViejo = nombreAlumno;
					sexoEdadViejo = sexo;
				}
				if(sexo == "no binario")
					{
						if (nota > maximaNota || contadorPsicologia == 0)
						
						{
							maximaNota = nota;
							nombreAlumnoMejor = nombreAlumno;
							edadAlumnoMejor = edad;
							estadoCarreraMejor = estadoCarrera;
						}
				
					}
				contadorPsicologia++;
				break;

			case "diseño grafico":
				contadorDiseñoGrafico++;
				
				break;

		}
		
		if(sexo == "no binario")
		{
			contadorSexoNoBinario++;
		}

		if(estadoCarrera == "finalizo")
		{
			contadorFinalizantes++;
			acumuladorFinalizantes = acumuladorFinalizantes + nota;
		}







		respuesta = prompt("desea seguir si/no?");
	}

	document.write("alumnos programacion" + contadorProgramacion + "<br>" + "alumnos psicologia" + contadorPsicologia + "<br>" + "alumnos diseño grafico" + contadorDiseñoGrafico+ "<Br>");
	document.write("la cantidad de mujeres que cursan programacion es : " + contadorProgramacionF + "<br>");
	document.write(contadorSexoNoBinario);
	if(contadorProgramacionF =! 0)
	{	
		promedio = acumuladorFinalizantes / contadorProgramacionF;
	}
	else
	{
		//no se calculo al no ingresar ningun alumno con esa condicion
	} 
	document.write(promedio)+ "<br>";
	document.write(nombreAlumnoViejo + "<br>" + "edad" + maximaedad + "su sexo" + "<br>" + sexoEdadViejo + "<br>");
	document.write(nombreAlumnoMejor+ "su calificacion" + maximaNota + "el estado de la carrera es " + estadoCarreraMejor + "<br>");

	if(contadorPsicologia > contadorDiseñoGrafico && contadorProgramacion)
	{
		carreraMasAlumno = "psicologia";
	}
	else
	{
		if(contadorDiseñoGrafico > contadorProgramacion && contadorPsicologia)
		{
			carreraMasAlumno = "diseño grafico";
		}

		else
		{
			carreraMasAlumno = "programacion";
		}
	}

	document.write(carreraMasAlumno);

}	

