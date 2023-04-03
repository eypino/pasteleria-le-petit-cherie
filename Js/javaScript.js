
/* JS LOGIN*/
function checkBlankLogin(){
  if (document.getElementById('email').value =="") {
    alert('Por favor ingrese su correo');
    return false;
  }
}
/* JS LOGIN CONTRASEÑA/EMAIL ERRONEO  */
function checkBlankRegistro(){
  if (document.getElementById('email').value =="ejemplo@mail.com" && document.getElementById('password').value=="12345" ) {
    alert('Sesión iniciada exitosamente');
    return false;
  }else if (document.getElementById('email').value ==""){

  }
  else{
    alert('Email o contraseña errónea')
  }
}