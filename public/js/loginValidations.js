window.onload = function () {
    let loginForm = document.querySelector ('.loginForm');
    let loginEmail = document.querySelector ('.loginEmail');
    let loginPsw = document.querySelector ('.loginPsw');

    loginEmail.addEventListener('blur', () => {
        if (loginEmail.value == "") {
            loginEmail.classList.remove('valido')
            loginEmail.classList.add('invalido')
            document.querySelector(".emailErrors").innerHTML = "Debes agregar un correo"
            errores = true
            errors = errors + 1
        } else {
            loginEmail.classList.remove('invalido')
            loginEmail.classList.add('valido')
            document.querySelector(".emailErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    });

    loginPsw.addEventListener('blur', () => {
        if (loginPsw.value == "") {
            loginPsw.classList.remove('valido')
            loginPsw.classList.add('invalido')
            document.querySelector(".loginPswErrors").innerHTML = "Debes ingresar tu contraseña"
            errores = true
            errors = errors + 1
        } else {
            loginPsw.classList.remove('invalido')
            loginPsw.classList.add('valido')
            document.querySelector(".loginPswErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    });

    loginForm.addEventListener('submit',(e)=> {
        let algoSalioMal = document.querySelector('.invalido')
        if (algoSalioMal) {
            e.preventDefault()
        }
    });

    let errores = false
    let errors = 0
};
