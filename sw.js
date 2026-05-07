const CACHE_NAME = 'dem-3d-v2.0.1'; // Bumping version to force update
const ASSETS = [
  '/',
  '/index.html',
  '/info/index.html',
  '/favicons/favicon-32x32.png',
  '/favicons/apple-touch-icon.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache v2.0.1');
        return cache.addAll(ASSETS);
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure that updates to the service worker take effect immediately
  return self.clients.claim();
});

// Fetch Assets: Network First for index.html, Cache First for others
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Strategy: Network First for the main pages to ensure the menu is always fresh
  if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/info/index.html') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Update the cache with the fresh version
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(() => {
          // Fallback to cache if network is unavailable
          return caches.match(event.request);
        })
    );
  } else {
    // Strategy: Cache First for static assets like favicons/scripts
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) return response;
          return fetch(event.request);
        })
    );
  }
});
