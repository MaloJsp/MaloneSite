const FILES_TO_CACHE = [
    '/',
    'index.html',
    'offline.html',
    "https://unpkg.com/spectre.css/dist/spectre.min.css",
    "https://unpkg.com/spectre.css/dist/spectre-exp.min.css",
    "https://unpkg.com/spectre.css/dist/spectre-icons.min.css",
    "css/style.css",
    "https://fonts.googleapis.com/css?family=Kavoon",
    "https://fonts.gstatic.com/s/kavoon/v8/pxiFyp4_scRYhlUIPbD7XVlNEM-K.woff2",
    "https://fonts.gstatic.com/s/kavoon/v8/pxiFyp4_scRYhlUIM7D7XVlNEA.woff2",
    "images/bgBlue.jpg",
    "/images/GrandmaIconLarge.png",
    "/images/PerfectCookie.png",
    "/js/script.js",
    "/manifest.json",
];

const CACHE_NAME = "hall-of-fame";

self.addEventListener('install', function(evt) {
console.log("sfdq");
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener('activate', function(evt){
    console.log('witness !');
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function (evt) {
    /*    console.log(" 00 ", evt.request.url);
        if (evt.request.mode !== 'navigate') {
            return;
        }*/
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {

                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match(evt.request.url);
                    });
            })
    );
});
