// Casinetori: service worker mínimo para que se pueda instalar como app (v2).
// No intercepta nada: la web siempre se carga normal desde internet.
// (Antes interceptaba la carga y en algunas redes, como las de institutos, mostraba «Sin conexión» por error.)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
