const CACHE_NAME = 'baifog-chat-v2';
const urlsToCache = [
  './',
  './index.html',
  './icon-192.PNG',
  './icon-512.PNG',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
