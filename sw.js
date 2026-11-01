self.addEventListener('install', (e) => { e.waitUntil(caches.open('ffchatgram-v2').then((c) => c.addAll(['./index.html']))); }); self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))); })self.addEventListener('install', (e) => {
    self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
    // Permette all'app di superare il controllo PWA per l'installazione
});
