function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    if(email != "admin@gmail.com"){
        alert("email salah");
        return false;
    }

    else if(password != "admin"){
        alert("password salah");
        return false;
    }
}