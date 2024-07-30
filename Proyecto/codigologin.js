//alert("funcionando");
var usuario="jose";
var clave="1234";

inpusuario=document.getElementById("usuario");
msj=document.getElementById("msj");
inpclave=document.getElementById("clave");
inpboton=document.getElementById("boton");
pyt=document.getElementById("pyt");
cmas=document.getElementById("cmas");
function iniciar(){
	///alert("listo");
	if (pyt.checked){
	location.href="python.html";
	}else{
	location.href="c++.html";
	}
}
function procesarlogin(){
	if(inpusuario.value==usuario && inpclave.value==clave){
		//alert("el usuario es correcto");
		msj.textContent="sesion iniciada...";
		msj.className="ok"; 
		setTimeout(iniciar,1000);
		
	}else{
		
		msj.textContent="contrasena/usuario incorrecto";
		msj.className="error"; 
	}
	//alert("funcionando");
}

inpboton.addEventListener("click",procesarlogin);


