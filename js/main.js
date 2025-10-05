// === FUNCIONES DEL CARRITO (ámbito global) ===

// Función para obtener la ruta correcta de la imagen según la ubicación del archivo
function obtenerRutaImagen(imagen) {
    // Obtenemos el pathname actual
    const path = window.location.pathname;

    // Verificamos si estamos en la raíz (index.html o /)
    const enRaiz = path.endsWith("/index.html") || path === "/" || path === "/index.html";

    if (enRaiz) {
        // Si estamos en la raíz, usamos la ruta tal como está
        return `./${imagen}`;
    } else {
        // Si estamos en una subcarpeta, anteponemos '../'
        return `../${imagen}`;
    }
}

// Obtener carrito desde localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// Guardar carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Actualizar el badge del ícono de carrito
function actualizarBadge() {
    const carrito = obtenerCarrito();
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const badge = document.querySelector(".nav-user-actions .badge");
    if (badge) badge.textContent = total;
}

// Calcular el total en base a los precios con punto (como separador de miles)
function calcularTotal() {
    const carrito = obtenerCarrito();
    return carrito.reduce((acc, item) => {
        // Eliminar símbolo $ y espacios
        const precioStr = item.precio.toString().replace(/\$/g, '').replace(/\./g, '').trim();
        const precioNum = parseFloat(precioStr);
        return acc + (precioNum * item.cantidad);
    }, 0);
}

// Formatear número como precio argentino (ej. $300.000,00)
function formatearPrecio(num) {
    return '$' + num.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Modificar cantidad de un producto en el carrito
function modificarCantidad(id, delta) {
    let carrito = obtenerCarrito();
    const item = carrito.find(p => p.id === id);
    if (!item) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.id !== id);
    }

    guardarCarrito(carrito);
    actualizarBadge();
    renderizarCarrito();
}

// Renderizar el contenido del carrito en el slidebar
function renderizarCarrito() {
    const carrito = obtenerCarrito();
    const drawer = document.querySelector(".cart-drawer");
    const body = drawer.querySelector(".cart-drawer__body");

    if (!body) return;

    if (carrito.length === 0) {
        body.innerHTML = `<p>Tu carrito está vacío.</p>`;
        const existingTotal = drawer.querySelector(".cart-drawer__total");
        if (existingTotal) existingTotal.remove();
        return;
    }

    const itemsHTML = carrito.map(item => {
        // Usamos la función para obtener la ruta correcta de la imagen
        const imagePath = obtenerRutaImagen(item.imagen || '/img/placeholder.jpg');
        return `
            <div class="cart-item" data-id="${item.id}">
                <img src="${imagePath}" alt="${item.nombre}">
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    <p>Precio: ${item.precio}</p>
                    <div class="quantity-controls">
                        <button class="decrease">−</button>
                        <span class="quantity">${item.cantidad}</span>
                        <button class="increase">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    body.innerHTML = itemsHTML;

    // Crear o actualizar sección total
    let totalContainer = drawer.querySelector(".cart-drawer__total");
    if (!totalContainer) {
        totalContainer = document.createElement("div");
        totalContainer.classList.add("cart-drawer__total");
        drawer.appendChild(totalContainer);
    }

    const total = calcularTotal();
    totalContainer.textContent = `Total: ${formatearPrecio(total)}`;

    // Botones + y −
    body.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.closest(".cart-item").dataset.id;
            modificarCantidad(id, 1);
        });
    });

    body.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.closest(".cart-item").dataset.id;
            modificarCantidad(id, -1);
        });
    });
}

// === EVENTOS DOM ===

document.addEventListener("DOMContentLoaded", () => {
    // === MENÚ HAMBURGUESA ===
    const menuToggle = document.querySelector(".menu-toggle");
    const navPrimary = document.querySelector(".nav-primary");

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.classList.toggle("open");
        navPrimary.classList.toggle("active");
    });

    // === CARRITO LATERAL ===
    const cartDrawer = document.querySelector(".cart-drawer");
    const cartButton = document.querySelector(".icon-btn[aria-label='Carrito de compras']");
    const closeCartButton = document.querySelector(".cart-drawer__close");

    cartButton.addEventListener("click", () => {
        cartDrawer.classList.add("open");
        cartDrawer.setAttribute("aria-hidden", "false");
    });

    closeCartButton.addEventListener("click", () => {
        cartDrawer.classList.remove("open");
        cartDrawer.setAttribute("aria-hidden", "true");
    });

    // Inicializar al cargar
    actualizarBadge();
    renderizarCarrito();
});
