var tareasM=[];

function init(){
	'use strict';
	var form=document.getElementById("form");
	form.onsubmit=addTarea;
}

function addTarea(){
	'use strict';
	var tarea=document.getElementById("tarea");
	tareas=document.getElementById("tareas");
	tareasM.push(tarea.value);
	var i;
	
	//Contruir una lista ordenada con las tareas introcudidas en tareasM[]
	var msg="<ol>";
	for (i=0;i<tareasM.length;i++){
		msg+="<li>" + tareasM[i] + "</li>";
	}
	msg+="</ol>";
	//Fin de la construccion de la lista
	
	//Añadir la lista de tareas al parrado tareas
	if (tarea.innerHTML!==undefined){
		tareas.innerHTML=msg;
		}else{
		tareas.innerText=msg;
		}
	return false;
}

window.onload=init;