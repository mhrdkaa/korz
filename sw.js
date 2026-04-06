self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.endsWith('/int')) {
    const targetUrl = url.searchParams.get('url');

    if (targetUrl) {
      event.respondWith(
        fetch(targetUrl, {
          mode: 'cors', 
        }).catch(err => new Response("Fetch Error: " + err))
      );
    }
  }
});
