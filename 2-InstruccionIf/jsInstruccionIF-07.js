function mostrar()
{
	//tomo la edad  
	var edad
	var estado
	edad = txtIdEdad.value;
	estado = estadoCivil.value;
	edad = parseInt(edad);

    if(edad < 18)
    
    {
    	if (estado != "Soltero")

    	{
    	   alert("es muy pequeño para no ser soltero");

    	}


	
}

}//FIN DE LA FUNCIÓN