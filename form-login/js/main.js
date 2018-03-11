function restringir() {
	var validar = true;
    var nombreI = document.formularioLogin.nombre.value;
	var password1 = document.getElementById("contra1").value;
    var password2 = document.getElementById("contra2").value;
    var txtCorreo = document.getElementById("correo").value;
    var checkedEstado = document.getElementById("notificacion").value;
    var checkedDigital = document.getElementById("digital").value;
//comprobamos si las contraseñas coinciden.
if( nombreI == null || nombreI.length == 0 || /^\s+$/.test(nombreI) ) {
    validar = false;
}
    
    if(password1!==password2){
			validar= false;
       }
    //comprobar correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){;
            validar=false;
        } 
    
    if(!validar){
       alert('Algunos campos no están correctos, vuelva a revisarlos');
       }
   
    return validar;
    
}
