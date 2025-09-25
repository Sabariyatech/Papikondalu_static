const CACHE_NAME = 'papikondalu-tourism-v1'
const urlsToCache = [
  '/',
  '/packages/',
  '/attractions/',
  '/gallery/',
  '/contact/',
  '/aboutus/',
  'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755401093/papihills1_hmfpkr.jpg'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})