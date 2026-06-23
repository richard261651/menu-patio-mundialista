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
    emoji: '',
    color: '#C8102E', // Rojo accent
    priceUnit: 5000,
    priceBucket: 48000,
    bucketSize: 10,
    desc: 'La cerveza premium de Colombia por excelencia. De sabor malteado pronunciado y cuerpo dorado profundo, ideal para celebrar cada momento.',
    abv: '4.7%',
    temp: '3-5 °C',
    origin: 'Colombia 🇨🇴',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/v1780865656/dorada1_xlzjyt.png'
  },
  coronita: {
    id: 'coronita',
    name: 'Coronita',
    emoji: '',
    color: '#0066B3', // Azul accent
    priceUnit: 4000,
    priceBucket: 38000,
    bucketSize: 10,
    desc: 'Frescura internacional en tamaño ideal. Sabor suave, refrescante y perfecta para balancear el calor tropical de Cartagena.',
    abv: '4.5%',
    temp: '2-4 °C',
    origin: 'México 🇲🇽',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/v1780865656/cerveza-coronita-botella-207ml_ccexpress-2_yjhdqc.png'
  },
  aguila: {
    id: 'aguila',
    name: 'Águila',
    emoji: '',
    color: '#FFCD00', // Amarillo accent
    priceUnit: 3800,
    priceBucket: 36000,
    bucketSize: 10,
    desc: 'El sabor oficial de la alegría nacional. Ligera, refrescante y la compañera infaltable para compartir con amigos.',
    abv: '4.0%',
    temp: '2-4 °C',
    origin: 'Colombia 🇨🇴',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/v1780865656/903487474516_cjfxaaambopq_768277666004_rqlghgvuvlxy_2496988_1_at4sgc.png'
  },
  aguila_light: {
    id: 'aguila_light',
    name: 'Águila Light',
    emoji: '',
    color: '#B8D430', // Verde Light
    priceUnit: 3800,
    priceBucket: 36000,
    bucketSize: 10,
    desc: 'Toda la frescura de Águila con menos calorías. Ligera, suave y perfecta para disfrutar sin parar.',
    abv: '3.5%',
    temp: '2-4 °C',
    origin: 'Colombia 🇨🇴',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/v1781733858/light-Photoroom_rgty0b.png'
  },
  costenita: {
    id: 'costenita',
    name: 'Costeñita',
    emoji: '',
    color: '#E2362B', // Rojo Costeñita
    priceUnit: 3200,
    priceBucket: 30000,
    bucketSize: 10,
    desc: 'La consentida del Caribe. Cerveza rubia tradicional, de cuerpo liviano y amargor moderado, altamente refrescante.',
    abv: '4.0%',
    temp: '1-3 °C',
    origin: 'Colombia 🇨🇴',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/v1780865656/Botella-costenita-cerveza-colombiana_pzxa9q.png'
  }
};

// --- BEBIDAS DATA ---
const BEBIDAS = [
  { name: 'Agua de Oro', emoji: '💧', price: 1500, color: '#4FC3F7', desc: 'Agua refrescante para mantenerte hidratado.', image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/v1781733866/agua-Photoroom_tndjyq.png' },
  { name: 'Coca Cola', emoji: '🥤', price: 3500, color: '#E53935', desc: 'La bebida clásica que nunca falla.', image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/f_auto,q_auto,w_200/v1781712402/coca-cola-plastic-bottle-isolated-on-transparent-background-free-png_n2t8xn.webp' }
];

// --- PICADAS DATA ---
const PICADAS = [
  {
    name: 'Chicharrón con Bollo',
    price: 16000,
    color: '#D4A056',
    desc: 'Crujiente chicharrón de cerdo acompañado de bollo. El clásico que no falla.',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/f_auto,q_auto,w_600/v1781711236/picada_de_chicharron_ou6jmm.png'
  },
  {
    name: 'Chorizo',
    price: 14000,
    color: '#C8102E',
    desc: 'Chorizo a la parrilla con su toque de limón y bollo. Sabor ahumado en cada bocado.',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/f_auto,q_auto,w_600/v1781711228/picada_de_chorizo_xjc1ke.png'
  },
  {
    name: 'Patacón (6 unidades)',
    price: 12000,
    color: '#FFCD00',
    desc: 'Seis patacones dorados y crocantes con ahogado y suero. Perfectos para compartir mientras rueda el balón.',
    image: 'https://res.cloudinary.com/dre8hlhdo/image/upload/f_auto,q_auto,w_600/v1781711245/picada_de_patacon_tx8jqu.png'
  }
];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  setupIntro();
  setupBeerMenu();
  setupBebidasMenu();
  setupPicadasMenu();
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
          <div class="nombre">${beer.name}</div>
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

// --- BEBIDAS MENU POPULATION ---
function setupBebidasMenu() {
  const container = document.getElementById('bebidasCards');
  if (!container) return;
  container.innerHTML = '';

  BEBIDAS.forEach(bebida => {
    const card = document.createElement('div');
    card.className = 'bebida-card';
    card.style.setProperty('--accent', bebida.color);

    const hasImage = bebida.image && bebida.image.trim() !== '';

    card.innerHTML = `
      ${hasImage ? `
        <div class="bebida-img-wrapper">
          <img class="bebida-img" src="${bebida.image}" alt="${bebida.name}">
        </div>
      ` : `
        <div class="bebida-emoji">${bebida.emoji}</div>
      `}
      <div class="bebida-info">
        <div class="bebida-nombre">${bebida.name}</div>
        <div class="bebida-desc">${bebida.desc}</div>
      </div>
      <div class="bebida-precio">$${formatPrice(bebida.price)}</div>
    `;

    // Abrir modal al hacer clic en la tarjeta
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      openBebidaModal(bebida);
    });

    container.appendChild(card);
  });
}

// --- BEBIDA DETAILS MODAL ---
function openBebidaModal(bebida) {
  const backdrop = document.getElementById('bebidaModal');
  if (!backdrop) return;

  // Actualizar detalles
  backdrop.style.setProperty('--accent', bebida.color);
  backdrop.querySelector('.modal-bebida-nombre').textContent = bebida.name;
  backdrop.querySelector('.modal-bebida-desc').textContent = bebida.desc;
  backdrop.querySelector('.modal-bebida-precio-val').textContent = `$${formatPrice(bebida.price)}`;
  backdrop.querySelector('.modal-bebida-badge').textContent = bebida.emoji + ' BEBIDA';

  // Establecer la imagen del producto
  const img = backdrop.querySelector('.modal-bebida-img');
  const hasImage = bebida.image && bebida.image.trim() !== '';
  if (hasImage) {
    img.src = bebida.image;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }

  // Mostrar Modal
  backdrop.classList.add('active');

  // Vincular eventos de cierre
  backdrop.querySelector('.modal-close').onclick = closeBebidaModal;
  backdrop.onclick = (e) => {
    if (e.target === backdrop) closeBebidaModal();
  };
}

function closeBebidaModal() {
  const backdrop = document.getElementById('bebidaModal');
  if (backdrop) backdrop.classList.remove('active');
}

// --- PICADAS MENU POPULATION ---
function setupPicadasMenu() {
  const container = document.getElementById('picadasCards');
  if (!container) return;
  container.innerHTML = '';

  PICADAS.forEach(picada => {
    const card = document.createElement('div');
    card.className = 'picada-card';
    card.style.setProperty('--accent', picada.color);

    const hasImage = picada.image && picada.image.trim() !== '';

    card.innerHTML = `
      ${hasImage ? `
        <div class="picada-img-wrapper">
          <img class="picada-img" src="${picada.image}" alt="${picada.name}">
        </div>
      ` : `
        <div class="picada-emoji-wrapper">
          <span class="picada-emoji">🍖</span>
        </div>
      `}
      <div class="picada-info">
        <div class="picada-nombre">${picada.name}</div>
        <div class="picada-desc">${picada.desc}</div>
      </div>
      <div class="picada-precio">$${formatPrice(picada.price)}</div>
    `;

    // Abrir modal al hacer clic en la tarjeta
    card.addEventListener('click', () => {
      openPicadaModal(picada);
    });

    container.appendChild(card);
  });
}

// --- PICADA DETAILS MODAL ---
function openPicadaModal(picada) {
  const backdrop = document.getElementById('picadaModal');
  if (!backdrop) return;

  // Actualizar detalles
  backdrop.style.setProperty('--accent', picada.color);
  backdrop.querySelector('.modal-picada-nombre').textContent = picada.name;
  backdrop.querySelector('.modal-picada-desc').textContent = picada.desc;
  backdrop.querySelector('.modal-picada-precio-val').textContent = `$${formatPrice(picada.price)}`;

  // Establecer la imagen del plato
  backdrop.querySelector('.modal-picada-img').src = picada.image;

  // Mostrar Modal
  backdrop.classList.add('active');

  // Vincular eventos de cierre
  backdrop.querySelector('.modal-close').onclick = closePicadaModal;
  backdrop.onclick = (e) => {
    if (e.target === backdrop) closePicadaModal();
  };
}

function closePicadaModal() {
  const backdrop = document.getElementById('picadaModal');
  if (backdrop) backdrop.classList.remove('active');
}

// --- HELPER FUNCTIONS ---
function formatPrice(val) {
  return new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(val);
}
