document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const section = document.getElementById("detalle-producto");
    if (!section) return;

    // Producto no especificado
    if (!id) {
        section.innerHTML = `
            <div class="product-info">
                <h2>Producto no especificado</h2>
                <p class="desc">No se ha indicado un producto para mostrar.</p>
            </div>`;
        return;
    }

    const producto = PRODUCTS.find(p => p.id === id);

    // Producto no encontrado
    if (!producto) {
        section.innerHTML = `
            <div class="product-info">
                <h2>Producto no encontrado</h2>
                <p class="desc">El producto que estás buscando no existe o fue removido.</p>
            </div>`;
        return;
    }

    // Cambiar título de la página
    document.title = `${producto.nombre} — Hermanos Jota`;

    // Renderizar contenido del producto
    section.innerHTML = `
        <div class="product-img">
            <img src="${obtenerRutaImagen(producto.imagen) || '/img/placeholder.jpg'}" alt="${producto.nombre || 'Producto'}">
        </div>

        <div class="product-info">
            <h2>${producto.nombre}</h2>
            <p class="desc">${producto.descripcion}</p>
            <table class="specs"></table>
            <p class="price"><strong>Precio: ${producto.precio || 'A consultar'}</strong></p>
            <button class="add-cart">Añadir al Carrito</button>
        </div>
    `;

    // Renderizar características
    const specs = section.querySelector(".specs");
    if (producto.caracteristicas && typeof producto.caracteristicas === 'object') {
        Object.entries(producto.caracteristicas).forEach(([clave, valor]) => {
            if (valor) {
                const row = document.createElement("tr");
                row.innerHTML = `<th>${clave}</th><td>${valor}</td>`;
                specs.appendChild(row);
            }
        });
    }

    // Validar funciones globales
    if (
        typeof obtenerCarrito !== "function" ||
        typeof guardarCarrito !== "function" ||
        typeof actualizarBadge !== "function" ||
        typeof renderizarCarrito !== "function"
    ) {
        console.error("Funciones globales del carrito no están disponibles.");
        return;
    }

    // Añadir al carrito
    const botonAddCart = section.querySelector(".add-cart");
    botonAddCart.addEventListener("click", () => {
        let carrito = obtenerCarrito();

        const existente = carrito.find(p => p.id === producto.id);
        if (existente) {
            existente.cantidad += 1;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        guardarCarrito(carrito);
        actualizarBadge();
        renderizarCarrito();

        mostrarToast("Producto añadido al carrito");
    });

    // Toast de confirmación
    function mostrarToast(mensaje) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = mensaje;
        document.body.appendChild(toast);

        // Animación
        setTimeout(() => toast.classList.add("visible"), 10);
        setTimeout(() => {
            toast.classList.remove("visible");
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }
});
