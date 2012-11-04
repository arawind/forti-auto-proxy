$(document).ready(function(){
  var webBlocked=$("body font table tbody tr td font b");
  var wlocation = window.location.href;
  if(webBlocked.text()=="Web Page Blocked"){
    var message="Fortiguard Sucks. Redirecting you through proxy: "; 
    $("body").html(message);
    window.location = "http://www.cheatfusd.appspot.com/"+wlocation.substring(7);
  }
});
