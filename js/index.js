// IDs de productos destacados
const FEATURED_PRODUCTS_IDS = ["p-001", "p-003", "p-004", "p-010"]; // elegí los que quieras mostrar

// Filtrar los productos destacados según IDs
const featuredProducts = PRODUCTS.filter(product => FEATURED_PRODUCTS_IDS.includes(product.id));

// Función para renderizar productos destacados
function renderFeaturedProducts(products) {
    const container = document.getElementById('productos-destacados');
    if (!container) {
        console.warn("No se encontró el contenedor de productos destacados.");
        return;
    }

    container.innerHTML = ''; // Limpiar contenido previo

products.forEach(({ nombre, imagen }) => {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    productCard.setAttribute('aria-label', `Producto destacado: ${nombre}`);

    const imagePath = obtenerRutaImagen(imagen);

    productCard.innerHTML = `
        <img src="${imagePath}" alt="Imagen de ${nombre}" loading="lazy" width="300" height="200">
        <h3>${nombre}</h3>
    `;

    container.appendChild(productCard);
});
}

// Ejecutar el render cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts(featuredProducts);
});
