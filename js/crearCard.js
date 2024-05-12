//crear tarjeta de producto

function crearCard(nombre, imagen, precio, id) {
  const cardProducto = `<div class="card-producto" data-index="${id}">
            <figure>
              <div class="contenedor-imagen"><img class="imagen-producto" src="${imagen}" alt="${nombre}"/></div>
              <figcaption class="nombre-producto">${nombre}</figcaption>
            </figure>
            <span class="contenedor-precio">
              <p>$ ${precio}</p>
              <img class="trash-icon" src="./imagenes/trash.png"/>
            </span>
          </div>`;
  return cardProducto;
}

export { crearCard };
