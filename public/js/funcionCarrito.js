
function productosEnElCarrito() {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0
    /*Esta funcion se puede mejorar y que muestre el total contando la cantidad de productos repetidos */
}

window.onload = function () {



    toastr.options = {
        positionClass: "toast-bottom-right",
        fadeIn: 300,
        fadeOut: 1000,
        timeOut: 5000,
        extendedTimeOut: 1000,
    }


    let idTouch = []
    let cartNumber = document.querySelector(".cart-number")
    let productoSeleccionado = document.querySelector('.box-product')

    cartNumber.innerText = productosEnElCarrito()


    console.log(productoSeleccionado)
    let btnComprar = document.querySelectorAll('.comprar');
    for (let i = 0; i < btnComprar.length; i++) {
        btnComprar[i].addEventListener('click', () => {
            idTouch = btnComprar[i].id
            console.log(idTouch)
            if (localStorage.carrito) {
                let carrito = JSON.parse(localStorage.carrito)
                let index = (carrito.findIndex(prod => prod.id == idTouch))
                // console.log(carrito)
                // console.log(index)
                if (index != -1) {
                    carrito[index].quantity++
                } else {
                    carrito.push({ id: idTouch, quantity: 1 })
                }
                localStorage.setItem('carrito', JSON.stringify(carrito))

            } else {
                localStorage.setItem('carrito', JSON.stringify([{ id: idTouch, quantity: 1 }]))
            }
            cartNumber.innerText = productosEnElCarrito()
            // alert('se agrego producto al carrito')
            toastr.success('Se agrego producto al carrito')
            // return idTouch
        })
    }


}