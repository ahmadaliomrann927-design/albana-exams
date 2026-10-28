const CACHE_NAME = 'albana-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  // أضف هنا مسارات ملفات التصميم أو الأسئلة الأساسية لديك لتخزينها محلياً
];

// تثبيت التخزين المؤقت
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// جلب الملفات من الذاكرة المحلية مباشرة لتسريع الفتح
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
