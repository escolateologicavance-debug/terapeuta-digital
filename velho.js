const cacheName = 'terapeuta-sincro-v4'; // Mudamos para v4 para forçar a limpeza
const assets = [
  './',
  './index.html',
  './avatar.jpg',
  './manifest.json'
];

self.addEventListener('install', e => {
  self.skipWaiting(); // Força o novo service worker a assumir o controle na hora
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', e => {
  // Limpa todos os caches antigos (incluindo o que tem a logo da Synchro)
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(key => key !== cacheName).map(key => caches.delete(key)));
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
