function Signup() {
	location.replace("signup.html")
}

function validate(){
var reg= /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z_\-\.]){1,}\.([A-Za-z]){2,4}$/;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if ( reg.test(username)==true && password == "123"){
	window.location = "home.html"; 
	alert ("Login successfully");
	return false;
}
else if (reg.test(username)==false) {
		document.getElementById("demo").innerHTML ="Invalid Email";	
}

else
{
	document.getElementById("demo1").innerHTML ="Invalid password";
}
}
