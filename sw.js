const CACHE_NAME = 'radartv-pwa-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Mantém a transmissão e requisições ao vivo sempre atualizadas
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});