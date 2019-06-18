importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18e8191816d941116bb5.js",
    "revision": "ffc5998f51d5561c402827a78722529f"
  },
  {
    "url": "/_nuxt/53b373af825cbe5a5756.js",
    "revision": "3043ebfe75b1a28df5f731cc18e28d20"
  },
  {
    "url": "/_nuxt/f55df5d823bed1f5be4f.js",
    "revision": "73f59412c90e1cef11988c12857e075a"
  },
  {
    "url": "/_nuxt/f9c07714b1659ea943ed.js",
    "revision": "df8b2e62061050617dbdd98fd39dd999"
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
