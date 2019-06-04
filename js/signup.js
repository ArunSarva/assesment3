(function() {
  'use strict';
  window.addEventListener('load', function() {
       var forms = document.getElementsByClassName('needs-validation');
       var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === true) {
          
          location.replace("login_mainpage.html")
        }
        else if (form.checkValidity() === false)
        {
          event.preventDefault();
          event.stopPropagation();
          
        } 

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
function login() {
  location.replace("login_mainpage.html")
}