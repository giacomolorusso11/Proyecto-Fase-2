//alert("funcionando");

formu=document.getElementById("formu");

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
	if(formu.children[1].children[0].value.length<4){
		//alert("el usuario es correcto");
		msj.textContent="ingrese un nombre valido";
		msj.className="error"; 
		//setTimeout(iniciar,1000);
		
	}else
	if(formu.children[2].children[0].value.length<=0){
		msj.textContent="ingrese correo";
		msj.className="error"; 
		
	}else
	if(formu.children[3].children[0].value<10){
		msj.textContent="edad invalida";
		msj.className="error"; 
		
	}else
	if(formu.children[4].children[0].value.length<1){
		msj.textContent="coloque apellido";
		msj.className="error"; 
		
	}else
	if(formu.children[5].children[0].value.length<8){
		msj.textContent="minimo 8 caracteres en contrasena";
		msj.className="error"; 
		
	}else{
		
		msj.textContent="Inscriccion Exitosa!";
		msj.className="ok"; 
	}
	//alert("funcionando");
}

inpboton.addEventListener("click",procesarlogin);


