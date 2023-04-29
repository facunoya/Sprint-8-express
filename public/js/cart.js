let products = [];/**/
function setCarritoVacio() {
    cartRows.innerHTMl = ` 
    <tr>
        <td>
            <div>No tienes productos en el carrito</div>
        </td>
    </tr>    
    `

}
function vaciarCarrito() {
    localStorage.removeItem("carrito")
}
function calcularTotal(products) {
    return products.reduce(
        (acum, product) => (acum += product.price * product.quantity),
        0
    )
}

//aca agarraria el carritoViejo de momento ejemplifico con cart row

let cartRows = document.querySelector('.cartRows')
let totalAmount = document.querySelector('.totalAmount')

if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito)
    carrito.forEach((item, index) => {
        fetch(`/api/product/${item.id}`)
            .then(res => res.json())
            .then((product) => {
                if (product) {

                    cartRows.innerHTML += `
                   <tr id="${index}">
                        <th scope="row">${index + 1}</th>
                        <td>${product.Destinations.name}</td>
                        <td>${product.price}</td>
                        <td>${item.quantity}</td>
                        <td>${parseFloat(product.price * item.quantity, 2).toFixed(2)}
    
                    </tr>                   
                   `
                    products.push({/**/
                        id: item.id,
                        name: product.Destinations.name,
                        price: product.price,
                        quantity: item.quantity/* */
                    })
                } else {
                    /*si no esta el carrito lo saco del storage */
                    carrito.splice(index, 1)
                    localStorage.setItem('carrito')
                }
            })
            .then(() => {
                totalAmount.innerText = `$ ${calcularTotal(products)}`

            }
            )
    });
}


let checkoutCart = document.querySelector('#checkoutCart')
checkoutCart.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)
    const formData = {
        orederItems: products,
        total: calcularTotal(products),


    }
    console.log(formData)
    // fetch("pruebacarrito", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    // })
    //     .then(res => res.json())
    //     .then(respuesta => {
    //         console.log(respuesta)
    //     })
})

/*tage u orderItem es la tabla relacionada cambiar nombre por la nuestra */