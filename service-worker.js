'use strict';

// Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v55';

const URL_PATH_NAME = (location.hostname === 'localhost') ? '/' : '/resume/';
// console.log(URL_PATH_NAME);
console.log(`service worker의 workerLocation --> ${location}`);
// console.log(location);
// Add list of files to cache here
const FILES_TO_CACHE = [
    `${URL_PATH_NAME}index.html`,
    `${URL_PATH_NAME}index.bundle.js`,
]

self.addEventListener('install', (event) => {
    console.log('>>> [ServiceWorker] Install <<<');
    // Precache static resources here.
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
});
  
self.addEventListener('activate', (event) => {
    console.log('>>> [ServiceWorker] Activate <<<');
    // Remove previous cached data from disk.
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache -->', key);
            return caches.delete(key);
          }
        }));
      })
    );
  
    self.clients.claim();
});


// self.addEventListener('fetch', (event) => {
//   console.log('👷', 'fetch', event);
//   event.respondWith(fetch(event.request));
// });


self.addEventListener('fetch', event => {
    console.log(`>>> [ServiceWorker] fetch <<<`);
    const req = event.request;
    const url = new URL(req.url);

    if(url.origin === location.url){
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(newtorkFirst(req));
    }
});


// 캐시 자체에 있는 파일과 요청을 일치시키는 함수
// 요청은 고유한 키(key)처럼 동작한다. 이 함수는 캐시에 아무 것도 없을 경우 undefined를 반환하거나 캐시 요청 자체를 반환한다.
async function cacheFirst(req){
    console.log(`>>> [ServiceWorker] cacheFirst <<<`);
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
}

// 네트워크 첫 접근(network-first approach)을 생성하기 위해서는, 필요할 경우에 모든 네트워크 에셋이 위치한 곳에 동적 캐시를 만들어야 한다.
// 패치가 진행되고 불가능한 경우 정적 캐시가 반환된다.
async function newtorkFirst(req){
    console.log(`>>> [ServiceWorker] newtorkFirst <<<`);
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;

    } catch (error) {
        return await cache.match(req);
    }
}

// self.addEventListener('fetch', (event) => {
//     console.log('[ServiceWorker] Fetch -->', event.request.url);
//     // fetch event handler here.
//     event.respondWith(
//         fetch(event.request)
//             .catch(() => {
//             return caches.open(CACHE_NAME)
//                 .then((cache) => {
//                     return cache.match(`/index.html`);
//                 });
//             })
//     );

// });