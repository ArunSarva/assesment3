function validate(){
var reg= /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z_\-\.]){1,}\.([A-Za-z]){2,4}$/;
var fname = document.getElementById("fname").value;
var sname = document.getElementById("sname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var street1 = document.getElementById("street1").value;
var street2 = document.getElementById("street2").value;
var city = document.getElementById("city").value;
var state = document.getElementById("state").value;
var zip = document.getElementById("zip").value;
var pwd = document.getElementById("pwd").value;
var vpwd = document.getElementById("vpwd").value;

if(fname=='null' || fname=="") {
document.getElementById("demo").innerHTML="First name cananot be blank";
}
if(sname=='null' || sname=="") {
document.getElementById("demo2").innerHTML="Second name cananot be blank";
}
if(email=='null' || email=="") {
document.getElementById("demo3").innerHTML="Email cananot be blank";
if ( reg.test(Email)==false){

	document.getElementById("demo3").innerHTML ="Invalid Email";	
}
}
if(phone=='null' || phone=="") {
document.getElementById("demo4").innerHTML="Phone numberFirst name cananot be blank";
}
if(street1=='null' || street1=="") {
document.getElementById("demo5").innerHTML="street address1 cananot be blank";
}
if(street2=='null' || street2=="") {
document.getElementById("demo6").innerHTML="street address2 cananot be blank";
}
if(city=='null' || city=="") {
document.getElementById("demo7").innerHTML="City cananot be blank";
}
if(state=='null' || state=="") {
document.getElementById("demo8").innerHTML="State cananot be blank";
}
if(zip=='null' || zip=="") {
document.getElementById("demo9").innerHTML="Zip code cananot be blank";
}
if(pwd=='null' || pwd=="") {
document.getElementById("demo10").innerHTML="password cananot be blank";

}
if(vpwd=='null' || vpwd=="") {
document.getElementById("demo11").innerHTML="Verify password cananot be blank";
}
if (pwd==vpwd) {
	document.getElementById("demo10").innerHTML="password not match";
	document.getElementById("demo11").innerHTML="Verify password not match";
}
}