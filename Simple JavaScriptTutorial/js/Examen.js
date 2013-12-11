function init(){
	var calcular=document.getElementById("calcular");
	calcular.onclick=calcularDias;
}

function calcularDias(){
	var dia1=parseInt(document.getElementById("dia1").value);
	var mes1=parseInt(document.getElementById("mes1").value);
	var ano1=parseInt(document.getElementById("ano1").value);
	
	var dia2=parseInt(document.getElementById("dia2").value);
	var mes2=parseInt(document.getElementById("mes2").value);
	var ano2=parseInt(document.getElementById("ano2").value);
	
	var totalDias=document.getElementById("totalDias");
	
	var anos=ano2-ano1;
	anos=(anos*365);
	
	if (mes1>mes2){
		var meses=(mes2+12)-mes1;
		meses=(meses*30);
	}else{
		var meses=mes2-mes1;
		meses=(meses*30);
	}
	
	if (dia1>dia2){
		var dias=(dia2+30)-dia1;
	}else{
		var dias=dia2-dia1;	
	}
	
	var diasT=dias+meses+anos;
	
	var msg="<p>" + "Hay " + diasT + " dias entre esas dos fechas" + "</p>";
		
	totalDias.innerHTML=msg;
}

window.onload=init;