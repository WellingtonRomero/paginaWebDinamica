//leer cookies
console.log(document.cookie)

function getCookie(nombreCookie){
	var nombre = nombreCookie +"=";
	var decodeCookie = decodeURIComponent(document.cookie);
	var separadoCokie = decodeCookie.split(";");
	for(var i=0;i<separadoCokie.length;i++){
		var valoresCookie = separadoCokie[i];
		while(valoresCookie.charAt(0) == ' '){
			valoresCookie = valoresCookie.substring(1);
		}
		if(valoresCookie.indexOf(nombre) == 0){
			return valoresCookie.substring(nombre.length,valoresCookie.length);
		}
	}
	return "";
}


//guardar cookies
function setCookie(nombre,valores,fechaExpiracion){
	var f = new Date();
	f.setTime(f.getTime()+(fechaExpiracion*24*60*60*1000));
	var expires = 'expires='+f.toUTCString();
	document.cookie = nombre +"="+valores+";"+expires+fechaExpiracion;

}

//comprobar que exista la cookie
function inicio(){
	var username = getCookie("tempUsuario");
    if (username != "") {
        location.href = 'perfiles/index.html';
    } 
}

function registro (){
	var nombre = document.getElementsByClassName('creden')[0].value;
    var contra = document.getElementsByClassName('creden')[1].value;
	setCookie("usuario",nombre,80);
    setCookie("passwd",contra,80);

}

//cookie temporal
function login() {
	var nombreI = document.getElementsByClassName('inicio')[0].value;
	var contraI = document.getElementsByClassName('inicio')[1].value;
	var contraB = getCookie('passwd');
    console.log(contraB);
	if(contraB==""){
		alert('no existe');
	}else {
		if(contraI==contraB){
			location.href = 'perfiles/index.html';
			setCookie("tempUsuario",nombreI,80);
		}
	}  

}
//Aceptar cookies
if(getCookie('tiendaaviso')!="1"){
    document.getElementById("barraAceptacion").style.display="block";
}
    function PonerCookie(){
    setCookie('tiendaaviso','1',365);
    document.getElementById("barraAceptacion").style.display="none";
}

//
var usuario = getCookie('tempUsuario');
	document.write(usuario);
	function salir() {
		setCookie('tempUsuario','',0);
		location.href = '../index.html';
	}


