function solonumero(evento) //con puntos y dos puntos
{ 
	if (navigator.appName=='Netscape'){
		tecla = evento.which;
	}else{
		tecla = evento.keyCode;
	}
	return (tecla <= 13 || (tecla >= 96 && tecla <= 105) || (tecla >= 48 && tecla <= 57) || tecla==110 || tecla==190 || tecla==46);
	
}
function funcion_par_impar(){

	numero = document.getElementById('numero').value.replace(/^\s+|\s+$/g,"");

	if (isNaN(numero) || numero.length<=0){
		alert("DEBE INGRESAR UN NUMERO")
		return;
	}
	
	if((numero % 2) == 0){
		alert("El numero: "+numero+" es PAR");
	}else{
		alert("El numero: "+numero+" es IMPAR");
	}

}
function funcion_arreglo(){

	var nro1 = document.getElementById('numero1').value;
	var nro2 = document.getElementById('numero2').value;

	//alert(nro1 + " /// " +isNaN(nro1) + " /// " +isNaN(document.getElementById('numero1').value))
	//return;
	if(isNaN(nro1)){
		alert("El numero 1 debe ser numerico!!");
		return;
	}
	if(isNaN(nro2)){
		alert("El numero 2 debe ser numerico!!");
		return;
	}
	if(parseInt(nro2)<parseInt(nro1)){
		alert("El Numero 1 debe ser menor que el Numero 2");
		return;	
	}
	impares = new Array();
	posicion=0;
	for(i=parseInt(nro1);i<=parseInt(nro2);i++){	
		if((i%2)!=0){
			impares[posicion]=i;
			posicion++;
		}
	}
	if(impares.length>0){
		alert("Los valores del Arreglo son: "+impares.join(','));
	}else{
		alert("NO HAY VALORES IMPARES ENTRE LOS NUMEROS CARGADOS");
	}
}

function funcion_suma_matriz(){


	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			if(isNaN(parseInt(document.getElementById('ma1_'+i+'_'+j).value))){
				var valorMA1 = 0;
			}else{
				var valorMA1 = parseInt(document.getElementById('ma1_'+i+'_'+j).value);
			}
			if(isNaN(parseInt(document.getElementById('ma2_'+i+'_'+j).value))){
				var valorMA2 = 0;
			}else{
				var valorMA2 = parseInt(document.getElementById('ma2_'+i+'_'+j).value);
			}

			document.getElementById('re_'+i+'_'+j).value = valorMA1 + valorMA2;
		}
	}
	
}
function funcion_multi_matriz(){
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			suma_parcial = 0;
			for(z=0;z<2;z++){
				if(isNaN(parseInt(document.getElementById('ma1_'+i+'_'+z).value))){
					var valorMA1 = 0;
				}else{
					var valorMA1 = parseInt(document.getElementById('ma1_'+i+'_'+z).value);
				}
				if(isNaN(parseInt(document.getElementById('ma2_'+z+'_'+j).value))){
					var valorMA2 = 0;
				}else{
					var valorMA2 = parseInt(document.getElementById('ma2_'+z+'_'+j).value);
				}

				suma_parcial = suma_parcial + (valorMA1 * valorMA2);
			}
			//alert( suma_parcial );
			document.getElementById('re_'+i+'_'+j).value = suma_parcial;
		}
	}
}
function funcion_copia_datos(){

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var edad = document.getElementById('edad').value;
	var domicilio = document.getElementById('domicilio').value;
	var provincia = document.getElementById('provincia').value;
	
	var sexo=0;
   	for (i = 0; i < document.getElementsByName('sexo').length; i++){ 
      	if (document.getElementsByName('sexo')[i].checked) {
         	sexo = document.getElementsByName('sexo')[i].value; 
 		}
   	}

	if(nombre.length<=0 || apellido.length<=0 || sexo==0 || edad.length<=0 || domicilio.length<=0 || provincia.length<=0){
		alert("ES NECESARIO CARGAR TODOS LOS DATOS")
		return;
	}
	if(isNaN(edad)){
		alert("LA EDAD DEBE SER UN NUMERO")
		return;
	}
	document.getElementById('areatexto').value = "Nombre y Apellido: "+nombre+' '+apellido+' \nEdad: '+edad+'  \nSexo:  '
						+sexo+'  \nDomicilio:  '+domicilio+'  \nProvincia:  '+provincia

}



function funcion_crea_arreglo(){



	miArreglo = new Array(2);

	for(i=0;i<2;i++){	
		miArreglo[i] = new Array(3);
	}
	valor = 10;
	for(i=0;i<2;i++){	
		for(j=0;j<3;j++){
			valor = valor + 1;
			miArreglo[i][j] = valor;
		}
	}
	
	alert (miArreglo.join(' , '));

}

function cargar_materia(){

	var materia = document.getElementById('materias').value.replace(/^\s+|\s+$/g,"");
	if (materia.length<=0) {
		alert("DEBE SELECCIONAR UNA MATERIA"); 
	   return;
	}
	texto_notas = '';
   	for (i = 1; i <= 5; i++){ 
		nota = parseInt(document.getElementById('nota_'+i).value);
		//alert(nota + " // " +parseInt(nota)+ " // " +isNaN(nota))
      	if (isNaN(nota)) {
         	alert("DEBE CARGAR TODAS LAS NOTAS"); 
			return;
 		}
		 if (nota<0 || nota>10) {
			alert("DEBE CARGAR UNA NOTA VALIDA"); 
		   return;
		}
		if(i==1){
			texto_notas = nota;
		}else{
			texto_notas = texto_notas + " // " + nota;
		}
		 
   	}

	document.getElementById('areatexto_materias').value = materia+' ** Notas: '+texto_notas

	//RESETEO VALORES
	document.getElementById('materias').options[0].selected = true;
	for (i = 1; i <= 5; i++){ 
		document.getElementById('nota_'+i).value = '';
	}
}

function funcion_suma_matriz2(){

	//alert("llego")
	pepe_0_0 = 1;
	pepe01 = 1;
	i=0;
	j=0;
	otra = "pepe"+"_"+i+"_"+j;
	alert("DATO: "+ pepe_0_0)
	
}