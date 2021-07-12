window.onload = function() {


	document.getElementById("subir").addEventListener("click", obtenerFechas);

}

function obtenerFechas() {
	var fecha1 = document.getElementById("fecha1").value;
	var fecha2 = document.getElementById("fecha2").value;
	var fechas = Array(fecha1, fecha2);
	pedirFechas(fechas);
	calcularFechas(fechas);
}

function pedirFechas(fechas) {
	var fecha1 = new Date(Date.parse(fechas[0]));
	var fecha2 = new Date(Date.parse(fechas[1]));

	try {
		if (fecha1 instanceof Date && !isNaN(fecha1.valueOf())) {
			if (!fecha2 instanceof Date || isNaN(fecha2.valueOf())) {
				throw "Formato de fecha invalido.";
			} else {
				if (fecha1 < fecha2) {
					calcularFechas(fecha1, fecha2);
				} else{
					alert("La primer fecha debe ser menor a la segunda fecha.");
				}
			}
		} else {
			throw "Formato de fecha invalido.";
		}
	} catch (error) {
		alert(error);
	}

}

function calcularFechas(fecha1, fecha2) {

	var diferencia = fecha2.getTime()-fecha1.getTime();
	diferencia = diferencia/(1000*3600*24);
	document.getElementById("content-boton").innerHTML = "<button id='bajar' style='font-size: 20px' onclick='volver()'>Volver</button></div>";
	document.getElementById("content-fechas").innerHTML = diferencia;
}

function volver(){
	location.reload();
}