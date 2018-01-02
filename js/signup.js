$(document).ready(function() {
  var $number = $('#inputPhoneNumber');
  var validateNumber = false;
  var randomCode = Math.round(Math.random()*6+1);
  

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateNumber) {
      $('form > button').attr('disabled', false);
      alert("Tu código: "+ randomCode+randomCode+randomCode)
    }
  }

  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  } 


  $number.on('input', function(event) {
    var REGEXNUMBER =/^(051-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?[2-9]\d{2}$/
    if (REGEXNUMBER.test($(this).val())) {
      validateNumber = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });
  
  $('form > button').on('click', function(event) {
    event.preventDefault();
    localStorage.number = $number.val();
    window.location.href = 'register.html';
  });
});