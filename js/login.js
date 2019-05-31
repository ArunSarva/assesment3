function validate(form_id,email_id) {
	var reg= /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z_\-\.]){1,}\.([A-Za-z]){2,4}$/;
	var adds= document.forms[form_id].elements[email_id].value;
	//var adds1= document.forms[form_id].elements[password].value;

	if (reg.test(adds)==false) {
		alert("wrong");
		document.forms[form_id].elements[email_id].focus();
		return false;
	}
	if (true) {
		location.replace("index.html")
	}
}
