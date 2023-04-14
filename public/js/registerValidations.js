window.onload = function () {
    let formularioJs = document.querySelector('#formularioRegistro')
    let nameJS = document.querySelector('.name')
    let emailJS = document.querySelector('.email')
    let countryJS = document.querySelector('.country')
    let phoneNumberJS = document.querySelector('.phoneNumber')
    let passwordJS = document.querySelector('.password')
    let profileJS = document.querySelector('.profile')
    let avatarJS = document.querySelector('.avatar')

    let errores = false
    let errors = 0
    nameJS.focus()
    nameJS.addEventListener('blur', () => {
        if (nameJS.value.length < 3 ) {
            nameJS.classList.remove('valido')
            nameJS.classList.add('invalido')
            document.querySelector(".nameErrors").innerHTML = "Debes completar el campo de Nombre"
            errores = true
            errors = errors + 1
        } else {
            nameJS.classList.remove('invalido')
            nameJS.classList.add('valido')
            document.querySelector(".nameErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    emailJS.addEventListener('blur', () => {
        if (emailJS.value == "") {
            emailJS.classList.remove('valido')
            emailJS.classList.add('invalido')
            document.querySelector(".emailErrors").innerHTML = "Debes agregar un correo"
            errores = true
            errors = errors + 1
        } else {
            emailJS.classList.remove('invalido')
            emailJS.classList.add('valido')
            document.querySelector(".emailErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    countryJS.addEventListener('blur', () => {
        if (countryJS.value == "") {
            countryJS.classList.remove('valido')
            countryJS.classList.add('invalido')
            document.querySelector(".countryErrors").innerHTML = "Debes ingresar un País"
            errores = true
            errors = errors + 1
        } else {
            countryJS.classList.remove('invalido')
            countryJS.classList.add('valido')
            document.querySelector(".countryErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    phoneNumberJS.addEventListener('blur', () => {
        if (phoneNumberJS.value == "") {
            phoneNumberJS.classList.remove('valido')
            phoneNumberJS.classList.add('invalido')
            document.querySelector(".phoneNumberErrors").innerHTML = "Debes ingresar un telefono"
            errores = true
            errors = errors + 1
        } else {
            phoneNumberJS.classList.remove('invalido')
            phoneNumberJS.classList.add('valido')
            document.querySelector(".phoneNumberErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    passwordJS.addEventListener('blur', () => {
        if (passwordJS.value.length < 5 ) {
            passwordJS.classList.remove('valido')
            passwordJS.classList.add('invalido')
            document.querySelector(".passwordErrors").innerHTML = "Debes ingresar una contraseña"
            errores = true
            errors = errors + 1
        } else {
            passwordJS.classList.remove('invalido')
            passwordJS.classList.add('valido')
            document.querySelector(".passwordErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    avatarJS.addEventListener('blur', () => {
        if (avatarJS.value == "") {
            avatarJS.classList.remove('valido')
            avatarJS.classList.add('invalido')
            document.querySelector(".avatarErrors").innerHTML = "Debes ingresar una imagen"
            errores = true
            errors = errors + 1
        } else {
            avatarJS.classList.remove('invalido')
            avatarJS.classList.add('valido')
            document.querySelector(".avatarErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })

    formularioJs.addEventListener('submit', (e) => {
        let algoSalioMal = document.querySelector('.invalido')
        if (algoSalioMal) {
            e.preventDefault()
        }
    })
}