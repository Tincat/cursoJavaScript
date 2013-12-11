function init(){
	var form=document.getElementById("dataform");
	form.onsubmit=calcularArea;
	
}

function calcularArea(){
	var radio=parseFloat(document.getElementById("rad").value);
	var areaInput=document.getElementById("area");
	var area=(Math.pow(radio,2))*Math.PI;
	
	if (radio && radio>0) {
		alert("El área del circulo es: " + area + " cm cuadrados");
		areaInput.value=area;
	}else{
		alert("Has metido un numero no valido");
	}
	return false;
}

window.onload=init;