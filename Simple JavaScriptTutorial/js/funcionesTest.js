var res;

var obj={
	nombre:'objeto obj`,
	mostrarNombre:function(){
		alert(this.nombre);
	}
};

var foo={
	nombre:'objeto foo`,
};

function sumar (x,y){
var suma=0;
	for (cont=0;cont<arguments.length;cont++){
		suma+=arguments[cont];//arguments va recorriendo cada valor que le pongamos dentro de los parentesis, osease los parametros.
	}
	var z=x+y;
	return z;
}

function restar (x,y){
	var z=x-y;
	return z;
}

function listarParametros(){
	for (cont=0;cont<arguments.length;cont++){
		alert (arguments [cont]);
	}
} 

function evaluar(x,y,fn){
	var fn=(arguments.pop();//pop es lo contrario que push. Pop quita valores de la matriz, y push los va poniendo en la matriz, y los acumula al final de la cola.
	fn (arguments);
	return z;
};

var suma=sumar((23,6,4,5,3,2);
evaluar (23,6,4,5,3,2,sumar);
res=evaluar (23,6,sumar);