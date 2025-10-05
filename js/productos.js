// ========================
// Agrupar productos por categoría
// ========================
function groupByCategory(items) {
    const grouped = {};
    items.forEach(p => {
        const categoria = p.categoria || "Sin categoría";
        (grouped[categoria] ||= []).push(p);
    });
    return grouped;
}

// ========================
// Crear tarjeta de producto
// ========================
function createCard(p) {
    const card = document.createElement("article");
    card.className = "card";

    // Título del producto
    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = p.nombre || "Sin título";
    card.appendChild(title);

    // Contenedor de imagen + overlay
    const thumb = document.createElement("div");
    thumb.className = "thumb";

    const img = document.createElement("img");
    // Aquí usamos la función para obtener la ruta correcta de la imagen
    img.src = obtenerRutaImagen(p.imagen);
    img.alt = p.nombre || "Producto";
    img.loading = "lazy";

    const overlay = document.createElement("a");
    overlay.className = "btn-overlay";
    overlay.href = `../paginas/producto.html?id=${encodeURIComponent(p.id)}`;
    overlay.setAttribute("aria-label", `Ver ${p.nombre || "producto"}`);
    overlay.textContent = "Ver";

    thumb.append(img, overlay);
    card.append(thumb);

    return card;
}

// ========================
// Crear bloque de categoría con carrusel
// ========================
function createCategoryBlock(cat, products) {
    const block = document.createElement("section");
    block.className = "category-block";

    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = cat;
    block.appendChild(title);

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    const track = document.createElement("div");
    track.className = "track";
    track.tabIndex = 0;

    products.forEach(p => track.appendChild(createCard(p)));

    const prev = document.createElement("button");
    prev.className = "carousel-btn prev";
    prev.setAttribute("aria-label", `Desplazar ${cat} hacia la izquierda`);
    prev.innerHTML = "&#10094;";

    const next = document.createElement("button");
    next.className = "carousel-btn next";
    next.setAttribute("aria-label", `Desplazar ${cat} hacia la derecha`);
    next.innerHTML = "&#10095;";

    // === Funciones internas del carrusel ===
    function cardWidth() {
        const sample = track.querySelector(".card");
        if (!sample) return 280;
        const gap = parseFloat(getComputedStyle(track).gap || "16");
        return Math.ceil(sample.getBoundingClientRect().width + gap);
    }

    function updateArrows() {
        const maxScroll = track.scrollWidth - track.clientWidth - 1;
        prev.disabled = track.scrollLeft <= 0;
        next.disabled = track.scrollLeft >= maxScroll;
    }

    function scrollByCards(direction = 1) {
        track.scrollBy({
            left: direction * cardWidth(),
            behavior: "smooth"
        });
        setTimeout(updateArrows, 280);
    }

    // === Event listeners ===
    prev.addEventListener("click", () => scrollByCards(-1));
    next.addEventListener("click", () => scrollByCards(1));
    track.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    track.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollByCards(1);
        }
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollByCards(-1);
        }
    });

    carousel.append(prev, track, next);
    block.appendChild(carousel);

    queueMicrotask(updateArrows);
    return block;
}   

// ========================
// Renderizar catálogo completo
// ========================
function renderCatalog(items) {
    const grid = document.getElementById("grid");
    const count = document.getElementById("count");

    if (!grid) return;

    grid.innerHTML = "";

    const grouped = groupByCategory(items);
    Object.keys(grouped).sort().forEach(cat => {
        const block = createCategoryBlock(cat, grouped[cat]);
        grid.appendChild(block);
    });

    if (count) {
        count.textContent = items.length;
    }
}

// ========================
// Búsqueda por nombre o categoría
// ========================
function setupSearch(source) {
    const input = document.getElementById("search");
    if (!input) return;

    const normalize = str =>
        (str ?? "").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

    function applySearch() {
        const query = normalize(input.value);
        if (!query) {
            renderCatalog(source);
            return;
        }

        const filtered = source.filter(p =>
            [p.nombre, p.categoria].map(normalize).join(" ").includes(query)
        );

        renderCatalog(filtered);
    }

    input.addEventListener("input", applySearch);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            input.value = "";
            applySearch();
        }
    });
}

// ========================
// Inicializar catálogo al cargar
// ========================
document.addEventListener("DOMContentLoaded", () => {
    renderCatalog(PRODUCTS);
    setupSearch(PRODUCTS);
});
