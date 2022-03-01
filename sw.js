self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open("static").then((cache) => {
			return cache.addAll(["./", "./index.js", "./styles.css","./index.html"])
		})
	)
})

self.addEventListener("fetch", function (event) {
	event.respondWith(
		fetch(event.request).catch(function () {
			return caches.match(event.request)
		})
	)
})