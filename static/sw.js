importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ff1743a833c498dcc1c.js",
    "revision": "605e8b8e09c5030e140803fa924586d0"
  },
  {
    "url": "/_nuxt/53b373af825cbe5a5756.js",
    "revision": "3043ebfe75b1a28df5f731cc18e28d20"
  },
  {
    "url": "/_nuxt/aa34f89f3696da0dbe57.js",
    "revision": "06d901d383c393dc303754a865df00f9"
  },
  {
    "url": "/_nuxt/f55df5d823bed1f5be4f.js",
    "revision": "73f59412c90e1cef11988c12857e075a"
  }
], {
  "cacheId": "ldexterldesign",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
