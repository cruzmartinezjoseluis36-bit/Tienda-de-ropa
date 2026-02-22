// Base de datos de productos (Lista)
const productos = [
    { id: 1, nombre: "Playera Negra Pro", genero: "Hombre", categoria: "Playeras", tallas: ["CH", "M", "G"], img: "https://via.placeholder.com/150" },
    { id: 2, nombre: "Playera Negra Fit", genero: "Mujer", categoria: "Playeras", tallas: ["XS", "CH", "M"], img: "https://via.placeholder.com/150" },
    { id: 3, nombre: "Short Training", genero: "Hombre", categoria: "Pantalones", tallas: ["30", "32", "34"], img: "https://via.placeholder.com/150" },
    { id: 4, nombre: "Leggings Compression", genero: "Mujer", categoria: "Pantalones", tallas: ["CH", "M"], img: "https://via.placeholder.com/150" },
    // Agrega más productos aquí, el ID es incremental manual o puedes hacer un auto-increment
];

function filterByGender(genero) {
    const homeView = document.getElementById('home-view');
    const catalogView = document.getElementById('catalog-view');
    const header = document.getElementById('main-header');
    const wrapper = document.getElementById('sections-wrapper');
    
    // Cambiar header según género (Azul o Rosa)
    header.className = (genero === 'Hombre') ? 'header-male' : 'header-female';
    
    homeView.classList.add('hidden');
    catalogView.classList.remove('hidden');
    document.getElementById('catalog-title').innerText = genero;

    // Filtrar productos
    const filtrados = productos.filter(p => p.genero === genero);
    
    // Obtener categorías únicas (Playeras, Pantalones, etc.)
    const categorias = [...new Set(filtrados.map(p => p.categoria))];

    // Renderizar
    wrapper.innerHTML = ""; // Limpiar
    categorias.forEach(cat => {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.innerHTML = `<h3 class="cat-name ${genero.toLowerCase()}">${cat}</h3><hr>`;
        
        const grid = document.createElement('div');
        grid.className = 'products-grid';

        filtrados.filter(p => p.categoria === cat).forEach(prod => {
            grid.innerHTML += `
                <div class="product-card">
                    <img src="${prod.img}" alt="${prod.nombre}">
                    <p class="prod-id">#${prod.id.toString().padStart(3, '0')}</p>
                    <h4>${prod.nombre}</h4>
                    <p class="tallas">Tallas: ${prod.tallas.join(', ')}</p>
                    <button class="btn-details">Detalles</button>
                </div>
            `;
        });

        section.appendChild(grid);
        wrapper.appendChild(section);
    });
}

function showHome() {
    document.getElementById('home-view').classList.remove('hidden');
    document.getElementById('catalog-view').classList.add('hidden');
    document.getElementById('main-header').className = '';
}
