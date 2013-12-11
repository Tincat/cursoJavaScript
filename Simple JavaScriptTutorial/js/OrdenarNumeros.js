var valorM=[];

function init(){
	var add=document.getElementById("add");
	var ordenar=document.getElementById("ordenar");
	add.onclick=introducirNumero;
	ordenar.onclick=ordenarNum;
}

function introducirNumero(){
	var valor=document.getElementById("valor");
	var valores=document.getElementById("valores");
	valorM.push(parseFloat(valor.value));
	
	var msg="<select>";
	for (var i=0;i<valorM.length;i++){
		msg+= "<option selected=selected>" + valorM[i] + "</option>";
	}
	msg+="</select>";
	
	for (i=0; i<valorM.length;i++){
		if (valor.innerHTML!==undefined){
			valores.innerHTML=msg;
		}else{
			valores.innerHTML=msg;
		}
	}
}

function ordenarNum(){
	for (i=0; i<valorM.length; i++){
		for (ii=0; ii<valorM.length; ii++){
			if (valorM[i]<valorM[ii]){
				var tmp=valorM[ii];
				valorM[ii]=valorM[i];
				valorM[i]=tmp;
			}
				
		}
	}
	var mssg="<p>";
	for (i=0; i<valorM.length; i++){
		mssg+=valorM[i] + ",";
	}
	mssg+="</p>";
	for (i=0; i<valorM.length; i++){
		if (ordenado.innerHTML==undefined){
			ordenado.innerHTML=mssg;
		}else{
			ordenado.innerHTML=mssg;
		}
		
	}
}

window.onload=init;