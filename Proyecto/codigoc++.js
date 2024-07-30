//alert("funcionando");formu.children[21].value

var puntos=0;

formu=document.getElementById("formu");
inpboton=document.getElementById("inpboton");

btnquiz=document.getElementById("btnquiz");
quiz=document.getElementById("quiz");
teoria=document.getElementById("teoria");
nota=document.getElementById("nota");
notanumero=document.getElementById("notanumero");
sesion=document.getElementById("sesion");
inpcerti=document.getElementById("inpcerti");

function procesarlogin(){
	puntos=0;
	//verdadero falso
	if(formu.children[7].checked){
		puntos=puntos+2;
	}
	if(formu.children[15].checked){
		puntos=puntos+2;
	}
	if(formu.children[21].checked){
		puntos=puntos+2;
	}
	//seleccion simple
	if(formu.children[31].value=="constantes"){
		puntos=puntos+3;
	}
	if(formu.children[35].value=="una clase"){
		puntos=puntos+3;
	}
	//seleccion multiple
	if(formu.children[42].checked && formu.children[44].checked &&
	formu.children[46].checked && !formu.children[48].checked){
		puntos=puntos+4;
	}	
	if(!formu.children[53].checked && formu.children[55].checked &&
	formu.children[57].checked && !formu.children[59].checked){
		puntos=puntos+4;
	}
	//alert("puntos:"+Math.ceil((20/7)*puntos)+"/20");
	//alert("puntos:"+puntos+"/20");
	procesarnota();

}
function procesarquiz(){
	teoria.className="fondo fantasma";
	quiz.className="fondo";
}
function procesarnota(){
	if(puntos>=1){
	teoria.className="fondo fantasma";
	quiz.className="fondo fantasma";
	nota.className="fondo ";
	notanumero.textContent="puntos:"+puntos+"/20";}else{location.href="nocalifico2.html";}

}
function procesarsesion(){
	location.href="index.html";

}
function procesacerti(){
	location.href="certificadoc.html";
	//alert("funciona");

}

inpboton.addEventListener("click",procesarlogin);
btnquiz.addEventListener("click",procesarquiz);
sesion.addEventListener("click",procesarsesion);
//inpcerti.addEventListener("click",procesacerti);


