// Casinetori: service worker mínimo para que se pueda instalar como app.
// No guarda nada en caché: así cada actualización llega al momento.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="background:#0d1020;color:#fff;font:18px system-ui;display:grid;place-items:center;height:100vh;margin:0;text-align:center"><div><h1>Sin conexión</h1><p>Casinetori necesita internet. Vuelve a intentarlo en un momento.</p></div>',
    {headers: {'Content-Type': 'text/html; charset=utf-8'}})));
});
