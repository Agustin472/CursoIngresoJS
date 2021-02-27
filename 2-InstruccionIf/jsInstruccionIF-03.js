/* Agustín De Pazos IF Ejercicio 3 
decir la edad si es mayor o menor */
function mostrar()
{
	  
	var edad;
	
	edad = txtIdEdad.value;
    edad = parseInt(edad);

    if (edad < 18)
    
    {
          alert("usted es mayor de edad");

    }

    else 

    {

    	  alert(" usted es menor de edad");
    }

}
