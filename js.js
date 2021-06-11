
// proyecto final mauro paredes


let viajesPedidos=[];

let cache = JSON.parse(localStorage.getItem('viajespedidos'));


if (cache){
    viajesPedidos=cache;
    actualizarCarrito();
}


const getAll =()=>{
    return arrayPrecioporzona
}

function traeArray() {
    return viajesPedidos
} 

const create = (viaje)=>{
    viajesPedidos.push(viaje);
}

class Pedido{
    constructor (nombre,dni,direccion,precio){
        this.nombre=nombre.toLowerCase();
        this.dni=dni;
        this.direccion=direccion.toLowerCase();
        this.precio=precio;
        
        
    }
    
}

let formPlataform=document.getElementById("form-plataforma");
let inputNombre=document.getElementById("input-nombre");
let inputDni=document.getElementById("input-dni");
let inputDireccion=document.getElementById("input-direccion");
let inputLocalidad=document.getElementById("input-localidad");
let listaPedidos=document.getElementById("lista-pedidos");

formPlataform.addEventListener('submit', function(event){
    event.preventDefault();
    
    
    let nombre=inputNombre.value;
    let dni=inputDni.value;
    let direccion=inputDireccion.value;
    let localidad=inputLocalidad.value;

    let validar = arrayPrecioporzona.find( el => el.localidad == localidad.toLowerCase());
    if (validar == undefined){
        throw alert("¡Localidad invalida!\n Ante la duda visite https://www.buenosaires.gob.ar/laciudad/barrios")
    }

    let precioBuscado=buscadorPrecio(localidad);
    
    
    let viaje=new Pedido(nombre,dni,direccion,precioBuscado);
    
    let itemViaje=document.createElement("li");
    itemViaje.textContent=`Hola ${nombre}: Su viaje ya esta siendo procesado :)!`;
    listaPedidos.appendChild(itemViaje);  
    
    create (viaje);
   
    localStorage.setItem("viajespedidos" , JSON.stringify(viajesPedidos));

    inputNombre.value="";
    inputDni.value="";
    inputDireccion.value="";
    inputLocalidad.value="";
  
  actualizarCarrito();
});



function buscadorPrecio(localidad){
    
    let {precio} = arrayPrecioporzona.find( el => el.localidad == localidad.toLowerCase());
    
    return precio;
}

function actualizarCarrito() {
    let contenedorCarrito = document.getElementById('carrito-contenedor');
    let precioTotal = document.getElementById('precioTotal');
    let contadorCarrrito = document.getElementById('contadorCarrito');

    contenedorCarrito.innerHTML = '';
    
    viajesPedidos.forEach((viaje) => {
        contenedorCarrito.innerHTML += `
        <div class="viajeEnCarrito">
        <p>${viaje.nombre}</p>
        <p>${viaje.dni}</p>
        <p>${viaje.direccion}</p>
        <p>Precio: $${viaje.precio}</p>
        <button onclick=eliminarViaje(${viaje.dni})  class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
        `
        
    })

    precioTotal.innerText = viajesPedidos.reduce( (acc, el) => acc + (el.precio), 0 );
    contadorCarrrito.innerText = viajesPedidos.length;
    localStorage.setItem("viajespedidos" , JSON.stringify(viajesPedidos));
    
}

function eliminarViaje(dni) {
    let viajeEliminar = viajesPedidos.find( el => el.dni == dni )
    let indice = viajesPedidos.indexOf(viajeEliminar)
    viajesPedidos.splice(indice, 1)
    localStorage.setItem("viajespedidos" , JSON.stringify(viajesPedidos));
    
    actualizarCarrito()
}




