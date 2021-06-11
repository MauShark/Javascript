let botonAbrir = document.getElementById('boton-carrito')
let contenedorModal = document.getElementsByClassName('modal-contenedor')[0]

let botonCerrar = document.getElementById('carritoCerrar')
let modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})

