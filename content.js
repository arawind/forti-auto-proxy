$(document).ready(function(){
  var webBlocked=$("body font table tbody tr td font b");
  if(webBlocked.text()=="Web Page Blocked"){
    var message="Fortiguard Sucks"; 
    $("body").html(message);
  }
});
