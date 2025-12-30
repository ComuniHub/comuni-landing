import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importar todas las imágenes de fondo para precargarlas ANTES de montar React
import heroMain from './assets/hero-main.webp';
import bck2 from './assets/bck-2.webp';
import bck3 from './assets/bck3.webp';
import bck4 from './assets/bck4.webp';
import backLanding07 from './assets/back_landing-07.webp';
import bck6 from './assets/bck6.webp';
import bck7 from './assets/bck7.svg';

// Precargar todas las imágenes inmediatamente y en paralelo
const imagesToPreload = [
  heroMain,
  bck2,
  bck3,
  bck4,
  backLanding07,
  bck6,
  bck7,
];

// Precargar de forma MUY agresiva antes de que React se monte
// Forzar descarga inmediata de todas las imágenes en paralelo usando múltiples métodos
imagesToPreload.forEach((src) => {
  // Método 1: Link preload con alta prioridad (más efectivo)
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = 'high';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
  
  // Método 2: Image object para forzar descarga inmediata
  const img = new Image();
  img.decoding = 'async';
  img.loading = 'eager';
  img.src = src;
  
  // Método 3: Fetch para forzar descarga en caché del navegador
  fetch(src, { 
    method: 'GET',
    cache: 'force-cache',
    priority: 'high'
  }).catch(() => {}); // Ignorar errores
  
  // Método 4: Crear un elemento img oculto para forzar descarga
  const hiddenImg = document.createElement('img');
  hiddenImg.style.display = 'none';
  hiddenImg.src = src;
  document.body.appendChild(hiddenImg);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
