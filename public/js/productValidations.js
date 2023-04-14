window.onload = function () {
    let formCreateProduct = document.querySelector('.formCreateProduct')
    let destination = document.querySelector('.destination')
    let descripcionImagen = document.querySelector('.descripcionImagen')
    let staying = document.querySelector('.staying')
    let price = document.querySelector('.price')
    let offer = document.querySelector('.offer')
    let checkIn = document.querySelector('.checkIn')
    let checkOut = document.querySelector('.checkOut')
    let lodging = document.querySelector('.lodging')
    let vehicle = document.querySelector('.vehicle')
    let tour = document.querySelector('.tour')
    let tour2 = document.querySelector('.tour2')
    let imgURL = document.querySelector('.imgURL')

    let errores = false
    let errors = 0

    destination.addEventListener('blur', () => {
        if (destination.value == "") {
            destination.classList.remove('valido')
            destination.classList.add('invalido')
            document.querySelector(".destinationErrors").innerHTML = "Debes completar el campo destino"
            errores = true
            errors = errors + 1
        } else {
            destination.classList.remove('invalido')
            destination.classList.add('valido')
            document.querySelector(".destinationErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    descripcionImagen.addEventListener('blur', () => {
        if (descripcionImagen.value == "") {
            descripcionImagen.classList.remove('valido')
            descripcionImagen.classList.add('invalido')
            document.querySelector(".descripcionImagenErrors").innerHTML = "Debes completar el campo descripcion Imagen"
            errores = true
            errors = errors + 1
        } else {
            descripcionImagen.classList.remove('invalido')
            descripcionImagen.classList.add('valido')
            document.querySelector(".descripcionImagenErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    staying.addEventListener('blur', () => {
        if (staying.value == "") {
            staying.classList.remove('valido')
            staying.classList.add('invalido')
            document.querySelector(".stayingErrors").innerHTML = "Debes completar el campo staying"
            errores = true
            errors = errors + 1
        } else {
            staying.classList.remove('invalido')
            staying.classList.add('valido')
            document.querySelector(".stayingErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    price.addEventListener('blur', () => {
        if (price.value == "") {
            price.classList.remove('valido')
            price.classList.add('invalido')
            document.querySelector(".priceErrors").innerHTML = "Debes completar el campo price"
            errores = true
            errors = errors + 1
        } else {
            price.classList.remove('invalido')
            price.classList.add('valido')
            document.querySelector(".priceErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    offer.addEventListener('blur', () => {
        if (offer.value == "") {
            offer.classList.remove('valido')
            offer.classList.add('invalido')
            document.querySelector(".offerErrors").innerHTML = "Debes completar el campo offer"
            errores = true
            errors = errors + 1
        } else {
            offer.classList.remove('invalido')
            v.classList.add('valido')
            document.querySelector(".offerErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    checkIn.addEventListener('blur', () => {
        if (checkIn.value == "") {
            checkIn.classList.remove('valido')
            checkIn.classList.add('invalido')
            document.querySelector(".checkInErrors").innerHTML = "Debes completar el campo checkIn"
            errores = true
            errors = errors + 1
        } else {
            checkIn.classList.remove('invalido')
            checkIn.classList.add('valido')
            document.querySelector(".checkInErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    checkOut.addEventListener('blur', () => {
        if (checkOut.value == "") {
            checkOut.classList.remove('valido')
            checkOut.classList.add('invalido')
            document.querySelector(".checkOutErrors").innerHTML = "Debes completar el campo checkOut"
            errores = true
            errors = errors + 1
        } else {
            checkOut.classList.remove('invalido')
            checkOut.classList.add('valido')
            document.querySelector(".checkOutErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })

    lodging.addEventListener('blur', () => {
        if (lodging.value == "") {
            lodging.classList.remove('valido')
            lodging.classList.add('invalido')
            document.querySelector(".lodgingErrors").innerHTML = "Debes completar el campo lodging"
            errores = true
            errors = errors + 1
        } else {
            lodging.classList.remove('invalido')
            lodging.classList.add('valido')
            document.querySelector(".lodgingErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    vehicle.addEventListener('blur', () => {
        if (vehicle.value == "") {
            vehicle.classList.remove('valido')
            vehicle.classList.add('invalido')
            document.querySelector(".vehicleErrors").innerHTML = "Debes completar el campo vehicle"
            errores = true
            errors = errors + 1
        } else {
            vehicle.classList.remove('invalido')
            vehicle.classList.add('valido')
            document.querySelector(".vehicleErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    tour.addEventListener('blur', () => {
        if (tour.value == "") {
            tour.classList.remove('valido')
            tour.classList.add('invalido')
            document.querySelector(".tourErrors").innerHTML = "Debes completar el campo tour"
            errores = true
            errors = errors + 1
        } else {
            tour.classList.remove('invalido')
            tour.classList.add('valido')
            document.querySelector(".tourErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    tour2.addEventListener('blur', () => {
        if (tour2.value == "") {
            tour2.classList.remove('valido')
            tour2.classList.add('invalido')
            document.querySelector(".tour2Errors").innerHTML = "Debes completar el campo tour2"
            errores = true
            errors = errors + 1
        } else {
            tour2.classList.remove('invalido')
            tour2.classList.add('valido')
            document.querySelector(".tour2Errors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    imgURL.addEventListener('blur', () => {
        if (imgURL.value == "") {
            imgURL.classList.remove('valido')
            imgURL.classList.add('invalido')
            document.querySelector(".imgURLErrors").innerHTML = "Debes completar el campo imgURL"
            errores = true
            errors = errors + 1
        } else {
            imgURL.classList.remove('invalido')
            imgURL.classList.add('valido')
            document.querySelector(".imgURLErrors").innerHTML = "";
            errores = false
            errors = errors - 1
        }
    })
    formCreateProduct.addEventListener('submit', (e) => {
        e.preventDefault()
    })


}