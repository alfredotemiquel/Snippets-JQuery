/* snippet JQuery para agregar la clase Active al li del menu donde nos encontremos*/

$(document).ready(function(){
  var cambio = false;

  $('nav ul li a').each(function(index) {
    if(this.href.trim() == window.location){
    $(this).parent().addClass("active");
    cambio = true;
    }
  });
  
  if(!cambio){  //si cambio es falso asigna la clase active al primer li
    $('nav ul li:first').addClass("active");
  }
  
});
