import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { baseName } from 'ba-api'

self.skipWaiting()
clientsClaim()

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
//  new RegExp( '\/' + import.meta.env.VITE_WORDPRESS_SITE + '\/wp-json\/wp\/v2'),
//  new RegExp( '/' + import.meta.env.VITE_WORDPRESS_SITE + '/wp-json/wp/v2'),
  new RegExp( baseName + '/wp-json/wp/v2'),
  new StaleWhileRevalidate({
    cacheName: "wp-json",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 63072e3
      }),
      new CacheableResponsePlugin({
        statuses: [200]
      })
    ]
  }),
  "GET"
)

self.addEventListener("push", function(event) {
  var data = event.data.json();
  if (data.type === "reservation-confirmation") {
    var reservation = data.reservation;

    event.waitUntil( function() {
        return self.registration.showNotification("Reservation Confirmed", {
          body: "Reservation for "+reservation.arrivalDate+" has been confirmed.",
          icon:  baseName + "android-chrome-192x192.png",
          tag: "neil-reservation-confirmation-"+reservation.id
        });
    });

  }
});
