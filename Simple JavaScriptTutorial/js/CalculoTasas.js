function init(){
	var formulario=document.getElementById("dataform");
	formulario.onsubmit=calcularPrecio;
	
}

function calcularPrecio(){
	var total;
	var ppu=parseFloat(document.getElementById("ppu").value);
	var unidades=parseFloat(document.getElementById("unidades").value);
	var tasas=parseFloat(document.getElementById("tasas").value);
	var descuento=parseFloat(document.getElementById("descuento").value);
	var totalInput=document.getElementById("total");

	var total=ppu*unidades;
	total=total+((total*tasas)/100);
	total=total-((total*descuento)/100);
	totalInput.value=total;
}

window.onload=init;
