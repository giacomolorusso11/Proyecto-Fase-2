//alert("funcionando");
var clave="1234";
var tempclave="";

inpclave=document.getElementById("clave");
inpclave2=document.getElementById("clave2");
inpboton=document.getElementById("boton");
msj=document.getElementById("msj");

function procesarlogin(){
	if(inpclave.value!=clave ){
		msj.textContent="contrasena actual incorrecta";
		msj.className="error"; 

	}else
	if(inpclave2.value.length<8 ){
		msj.textContent="minimo 8 caracteres en contrasena";
		msj.className="error"; 

	}else{
		clave=inpclave2.value;
		msj.textContent="la clave se ha actualizado";
		msj.className="ok"; 
	}
}

inpboton.addEventListener("click",procesarlogin);


//&& inpclave2.value.length>=8