
var click = document.getElementById('click');
click.addEventListener('click', function (evento) {

  var restriccionesTexto = document.getElementsByClassName('nomApe');
  var textRegEx1 = /^[A-Za-z ]{3,15}$/;
        
  for (var i=0; i < restriccionesTexto.length; i++) {
    if (!textRegEx1.test(restriccionesTexto[i].value)) {
      restriccionesTexto[i].setCustomValidity('Este campo es obligatorio');
    } else {
      restriccionesTexto[i].setCustomValidity('');
    }    
  }

  var provincia = document.getElementById('provincia');
  if (provincia.value == 0) {
    provincia.setCustomValidity('Debes seleccionar una provincia');
  } else {
    provincia.setCustomValidity('');
  }
  
  var edad = document.getElementById('edad');
  if (isNaN(edad.value) || edad.value <= 0 || edad.value >=105) {
    edad.setCustomValidity('Introduzca solo caracteres numericos entre 1 y 104');
  } else {
    edad.setCustomValidity('');
  }

  var tipos1 = document.getElementsByName('vacunas')[0];
  var tipos2 = document.getElementsByName('vacunas')[1];
  var tipos3 = document.getElementsByName('vacunas')[2];
  var tipos4 = document.getElementsByName('vacunas')[3];
  if (tipos1.checked == false && tipos2.checked == false && tipos3.checked == false && tipos4.checked == false) {
    tipos1.setCustomValidity('Selecciona un tipo de vacuna');
  } else {
    tipos1.setCustomValidity('');
  }

  var dosis1 = document.getElementsByName('cb_1_2')[0];
  var dosis2 = document.getElementsByName('cb_1_2')[1];
  if (dosis1.checked == false && dosis2.checked == false) {
    dosis1.setCustomValidity('Selecciona cantidad de dosis aplicadas');
  } else {
    dosis1.setCustomValidity('');
  }

  var experiencia = document.getElementById('experiencia');
  var textRegEx2 = /^[A-Za-z0-9 ]{15,300}$/;
  if (!textRegEx2.test(experiencia.value)) {
      experiencia.setCustomValidity('Debes ingresar minimo 15 caracteres');
  } else {
      experiencia.setCustomValidity('');
  } 
  experiencia.addEventListener('input', function() {
    if (!textRegEx2.test(experiencia.value)) {
        experiencia.setCustomValidity('Debes ingresar minimo 15 caracteres');
    } else {
        experiencia.setCustomValidity('');
    }
  });

  var email = document.getElementById('mail');
  var textRegEx3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!textRegEx3.test(email.value)) {
    email.setCustomValidity('El email es incorrecto');
  } else {
    email.setCustomValidity('');
  }
  email.addEventListener('input', function (){
    if (!textRegEx3.test(email.value)) {
      email.setCustomValidity('El email es incorrecto');
    } else {
      email.setCustomValidity('');
    }  
  });

});





//if (provincia.value == 0 || provincia.value == "") {      
  //        provincia.setCustomValidity('Debes seleccionar una provincia');
  //        document.formulario.provincia.focus();
  //        }

// TERCER APPROACH

//function iniciar(){
//    let nombre=document.getElementById('nombre');
//    let apellido=document.getElementById('apellido');
//    nombre.addEventListener('input', () => validarTexto(nombre.value), false);
//    apellido.addEventListener('input', () => validarTexto(apellido.value), false);
//    let provincia = document.getElementById('provincia');
//    provincia.addEventListener('input', () => validarProvincia, false);    
//    
//}
//function submit() {
//    console.log(e);
//    validarTexto(document.getElementById('nombre').value);
//}
//
//function validarTexto(valorAtestear) {
//    const textRegEx = /^[A-Za-z]{3,15}$/; 
//    if (!textRegEx.test(valorAtestear)) {
//        nombre.setCustomValidity('Debes introducir un nombre');
//        return false;  
//    }
//}
//
//function validarProvincia() {
//    if (provincia.value == 0) {
//        provincia.setCustomValidity('Debes ingresar una provincia');
//        document.formulario.provincia.focus();
//    }
//}
//
//window.addEventListener('load', iniciar, false);


// SEGUNDO APPROACH
//
//function validar(){
//    if (nombre.value == "" || apellido.value == "") {
//        nombre.setCustomValidity('Debes introducir un nombre');
//        apellido.setCustomValidity('Debes introducir un apellido')//;        
//    }else if(nombre.value !== "text" || apellidos.value !== "text") {
//        nombre.setCustomValidity('No se admiten numeros');
//        apellido.setCustomValidity('No se admiten números');
//    } else {
//        nombre.setCustomValidity('');
//        nombre.style.background='#FFFFF';
//        apellido.style.background='#FFFFF'
//    }
//
//    if (provincia.value == 0 || provincia.value == "") {      
//        provincia.setCustomValidity('Debes seleccionar una provincia');
//        document.formulario.provincia.focus();
//        }
//}

//   window.addEventListener('load', iniciar, false);




// PRIMER APPROACH


//var camposTexto = document.getElementById("formulario").//elements; 
//var vEdad = document.getElementById('edad');
//var vProvincia = document.getElementById('provincia');
//function validar(){
//    for (i=0; i < camposTexto.length; i++) {
//		if (camposTexto[i].value == '' && camposTexto[i].//type=='text'){
//			alert("El campo " + camposTexto[i].id + " está vacio //y es OBLIGATORIO");
//			return false;
//    	}    
//   }
//   
//    if (provincia.value == 0 || provincia.value == "") {      
//       alert("Debes seleccionar una provincia");
//       document.formulario.provincia.
//         focus();
//      }
//
//    if (isNaN(vEdad.type)) {
//        alert('Debe ingresar un numero');
//        return false; 
//      } else if (vEdad.length <= 0 || vEdad.length > 104); {
//        alert('La edad debe ser entre 1 y 104');
//        return false;
//    }
//}


