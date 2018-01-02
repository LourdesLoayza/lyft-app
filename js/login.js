$(document).ready(function() {
  var $firstName= $('#inputFirstName');
  var $email = $('#inputEmail');
  var $buttonSubmit = $('button[type="submit"]');

  // variable booleanas para la activación del boton  
  var validateEmail = false;
  var validateFirstName = false; 

  // llamamos a los valores guardados en el localStorage
  console.log(localStorage.firsName);
  console.log(localStorage.email);

  $firstName.on('input', function() {
    if ($(this).val() === localStorage.firsName) {
      validateFirstName = true;
    }
  });  
 
  $email.on('input', function() {
    if ($(this).val() === localStorage.email) {
      validateEmail = true;
    }
  });

  $buttonSubmit.on('click', function(event) {
    event.preventDefault();
    if (validateFirstName&&validateEmail) {
      alert('Welcome '+$firstName);
      window.location.href = 'welcome.html';
    } else {
      alert('Usuario no registrado');
      window.location.href = 'register.html';
    }
   
  });
});