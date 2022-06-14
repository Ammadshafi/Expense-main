let cacheData = "appV1";
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/bootstrap.min.css',
                '/index.html',
                '/',
                '/firebase-messaging-sw.js',
                '/manifest.json ',
                '/static/js/bundle.js',
                '/favicon.ico',
                '/logo192.png'
            ])
        })
    )
})
self.addEventListener("fetch", (event) => {


    if (!navigator.onLine) {
      
        event.respondWith(
            caches.match(event.request).then((resp) => {
                return resp
                
            })
        )
    }
}) 