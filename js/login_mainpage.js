function Signup() {
	location.replace("signup.html")
}

function validate(){
var reg= /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z_\-\.]){1,}\.([A-Za-z]){2,4}$/;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( reg.test(username)==true && password == "123"){
alert ("Login successfully");
window.location = "home.html"; 
return false;
}
else{
alert("Email ID and password is not match");

return false;
}
}
