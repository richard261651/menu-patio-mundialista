/* ==========================================
   PATIO MUNDIALISTA - APP ENGINE
   ========================================== */


// --- BEER DATA DATABASE ---
// NOTA PARA PERSONALIZACIÓN:
// Para colocar tus propias imágenes alojadas en Cloudinary, reemplaza la ruta local 'assets/...'
// por la URL completa de tu imagen de Cloudinary.
// Ejemplo: image: 'https://res.cloudinary.com/mi_usuario/image/upload/mi_cerveza_sin_fondo.png'
const BEERS = {
  club_colombia: {
    id: 'club_colombia',
    name: 'Club Colombia',
    emoji: '🍺',
    color: '#C8102E', // Rojo accent
    priceUnit: 5500,
    priceBucket: 50000,
    bucketSize: 10,
    desc: 'La cerveza premium de Colombia por excelencia. De sabor malteado pronunciado y cuerpo dorado profundo, ideal para celebrar cada momento.',
    abv: '4.7%',
    temp: '3-5 °C',
    origin: 'Colombia 🇨🇴',
    image: 'assets/club_colombia.png'
  },
  coronita: {
    id: 'coronita',
    name: 'Coronita',
    emoji: '🍺',
    color: '#0066B3', // Azul accent
    priceUnit: 4600,
    priceBucket: 45000,
    bucketSize: 10,
    desc: 'Frescura internacional en tamaño ideal. Sabor suave, refrescante y perfecta para balancear el calor tropical de Cartagena.',
    abv: '4.5%',
    temp: '2-4 °C',
    origin: 'México 🇲🇽',
    image: 'assets/coronita.png'
  },
  aguila: {
    id: 'aguila',
    name: 'Águila',
    emoji: '🍺',
    color: '#FFCD00', // Amarillo accent
    priceUnit: 3500,
    priceBucket: 32000,
    bucketSize: 10,
    desc: 'El sabor oficial de la alegría nacional. Ligera, refrescante y la compañera infaltable para compartir con amigos.',
    abv: '4.0%',
    temp: '2-4 °C',
    origin: 'Colombia 🇨🇴',
    image: 'assets/aguila.png'
  },
  costenita: {
    id: 'costenita',
    name: 'Costeñita',
    emoji: '🍺',
    color: '#E2362B', // Rojo Costeñita
    priceUnit: 3500,
    priceBucket: 32000,
    bucketSize: 10,
    desc: 'La consentida del Caribe. Cerveza rubia tradicional, de cuerpo liviano y amargor moderado, altamente refrescante.',
    abv: '4.0%',
    temp: '1-3 °C',
    origin: 'Colombia 🇨🇴',
    image: 'assets/costenita.png'
  }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  setupIntro();
  setupBeerMenu();
});

// --- INTRO SEQUENCE CONTROLLER ---
function setupIntro() {
  const intro = document.getElementById('intro');
  const app = document.getElementById('app');
  let entrado = false;

  // Fase 2: Collapsing bands to form Colombian tricolor border line
  setTimeout(() => { 
    if (intro) intro.classList.add('fase2'); 
  }, 1300);

  // Auto transition to app
  setTimeout(() => { 
    if (!entrado) entrar(); 
  }, 4400);

  window.entrar = function() {
    if (entrado) return;
    entrado = true;
    
    if (intro) intro.classList.add('hide');
    if (app) app.classList.add('show');
    
    setTimeout(() => { 
      if (intro) intro.style.display = 'none'; 
    }, 850);
  };
}

// --- BEER MENU POPULATION ---
function setupBeerMenu() {
  const menuContainer = document.getElementById('beerMenuCards');
  if (!menuContainer) return;
  menuContainer.innerHTML = ''; // Limpiar HTML original

  Object.values(BEERS).forEach(beer => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--accent', beer.color);
    
    card.innerHTML = `
      <div class="card-image-float-wrapper">
        <img class="card-float-img" src="${beer.image}" alt="${beer.name}">
      </div>
      <div class="card-content-side">
        <div class="card-header-row">
          <div class="nombre"><span class="emoji">${beer.emoji}</span> ${beer.name}</div>
          <div class="info-tag">${beer.origin}</div>
        </div>
        <div class="card-description">${beer.desc}</div>
        <div class="precios">
          <div class="precio-box">
            <span class="label">UNIDAD</span>
            <span class="valor">$${formatPrice(beer.priceUnit)}</span>
          </div>
          <div class="precio-box cube">
            <span class="label">CUBETAZO</span>
            <span class="valor">$${formatPrice(beer.priceBucket)}</span>
            <span class="mini">${beer.bucketSize} UND</span>
          </div>
        </div>
      </div>
    `;

    // Abrir modal al hacer clic en cualquier parte de la tarjeta
    card.addEventListener('click', () => {
      openBeerModal(beer);
    });

    menuContainer.appendChild(card);
  });
}

// --- BEER DETAILS MODAL ---
function openBeerModal(beer) {
  const backdrop = document.getElementById('beerModal');
  if (!backdrop) return;
  
  // Actualizar detalles
  backdrop.style.setProperty('--accent', beer.color);
  backdrop.querySelector('.modal-beer-nombre').textContent = beer.name;
  backdrop.querySelector('.modal-beer-badge').textContent = beer.origin;
  backdrop.querySelector('.modal-beer-desc').textContent = beer.desc;
  
  // Establecer especificaciones
  backdrop.querySelector('.spec-abv').textContent = beer.abv;
  backdrop.querySelector('.spec-temp').textContent = beer.temp;
  backdrop.querySelector('.spec-origin').textContent = beer.origin.split(' ')[0];
  
  // Establecer precios informativos
  backdrop.querySelector('.spec-price-unit').textContent = `$${formatPrice(beer.priceUnit)}`;
  backdrop.querySelector('.spec-price-bucket').textContent = `$${formatPrice(beer.priceBucket)}`;

  // Establecer la imagen del producto
  backdrop.querySelector('.modal-beer-img').src = beer.image;

  // Mostrar Modal
  backdrop.classList.add('active');

  // Vincular eventos de cierre
  backdrop.querySelector('.modal-close').onclick = closeBeerModal;
  backdrop.onclick = (e) => {
    if (e.target === backdrop) closeBeerModal();
  };
}

function closeBeerModal() {
  const backdrop = document.getElementById('beerModal');
  if (backdrop) backdrop.classList.remove('active');
}

// --- HELPER FUNCTIONS ---
function formatPrice(val) {
  return new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(val);
}
