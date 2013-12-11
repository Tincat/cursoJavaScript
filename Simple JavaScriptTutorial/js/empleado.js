function init(){
	'use strict';
	var form=document.getElementById("form");
	form.onsubmit=resumenEmpleado;
}

function resumenEmpleado() {
	var nombreT=document.getElementById("nombre");
	var domicilioT=document.getElementById("domicilio");
	var telefonoT=document.getElementById("telefono");
	var puestoT=document.getElementById("puesto");
	var empleado={
		nombre:nombreT.value,domicilio:domicilioT.value,
		telefono:telefonoT.value,puesto:puestoT.value,
		fechaContratacion:new Date()
	};
	var resumen=document.getElementById("resumen");
	var str="<h2>Empleado</h2>";
	for (att in empleado){
		str+=att + ":" + empleado[att] + "<br />";
	}
	resumen.innerHTML=str;
	return false;
}
window.onload=init;