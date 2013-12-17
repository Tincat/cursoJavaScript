var apuestas={
	valores:[],
	insertar:function(x){
		valores.push(x);
	},
	toString: function(){
		apuestasStr="Apuesta";
		for (val in this.valores){
			apuestasStr+=" " + val;
		}
		return apuestasStr;
	}
};


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
	var rango=parseInt($1('rango').value);
	var numeroApuestas=parseInt($1('nApuestas').value);
	for (cont=0;cont<numeroApuestas;cont++){
		apuestas.insertar(Math.floor(Math.random()*rango));
	}
	var resultado=$1('rasultado');
	resultado.innerHTML(apuestastoString);
}

function init(){
	
	var genApBtn=$1('genApBtn');
	genApBtn.onclick=generarApuestas;
}

window.onload=init;