var apuestas=[];
//Math.floor(Math.random()*numero)
function $1(id){
	if(typeof  id != "undefined"){
		var ref=document.getElementById(id);
		return ref;
	}
	return null;
	
}

function mostrarPorConsola(obj){
	for(att in obj)
		console.log(obj[att]);
	
}
function generarApuestas(){
	
}

function init(){
	
	var genApBtn=$1('genApBtn');
	genApBtn.onclick=generarApuestas;
}

window.onload=init;