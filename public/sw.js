let cacheData = "appV1";
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/',
                '/static/css/main.5546ede1.css',
                '/static/js/main.fe5c3967.js',
                '/manifest.json',
                '/favicon.ico',
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