self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === '/int') {
    const targetUrl = url.searchParams.get('url');
    if (targetUrl) {
      event.respondWith(
        fetch(targetUrl, {
          mode: 'cors', 
        })
      );
    }
  }
});
