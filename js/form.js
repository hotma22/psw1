function sub() {
	var nama = document.forms['formID']['nameID'].value;
	var email = document.forms['formID']['emailID'].value;
	var at = email.indexOf("@");
	var dot = email.indexOf('.');
	var pesan = document.forms['formID']['messageID'].value;

	if (nama=="") {
		alert("Nama tidak boleh kosong");
		return false;
	}
	if (at < 0 || dot < 0) {
		alert("Email yang anda masukkan tidak valid");
		return false;
	}
	if (pesan == "") {
		alert("Ketikkan pesan anda!!!");
		return false;
	}
	else{
		alert("Terima kasih, pesan anda sudah terkirim.");
	}
}