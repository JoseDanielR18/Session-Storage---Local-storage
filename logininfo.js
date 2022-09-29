function datosAlmacenados(){
    var user = localStorage.getItem("user");
    var userEmail = localStorage.getItem("userEmail");
    var userPassword = sessionStorage.getItem("userPassword");

    document.getElementById("usuario").innerHTML = user;
    document.getElementById("email").innerHTML = userEmail;
    document.getElementById("contraseña").innerHTML = userPassword;
}

window.addEventListener("load", datosAlmacenados)