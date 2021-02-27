function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero
	var maximo
	var minimo
    
    maximo = parseInt(maximo);
    minimo = parseInt(minimo);
	maximo = 10;
	minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numero);
}//FIN DE LA FUNCIÓN