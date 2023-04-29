window.onload = function () {




    let idTouch = []
    let productoSeleccionado = document.querySelector('.box-product')
    console.log(productoSeleccionado)
    let btnComprar = document.querySelectorAll('.comprar');
    for (let i = 0; i < btnComprar.length; i++) {
        btnComprar[i].addEventListener('click', () => {
            idTouch = btnComprar[i].id
            console.log(idTouch)
            return idTouch
        })
    }


}