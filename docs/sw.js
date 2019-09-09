importScripts('js/sw-utils.js');

const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const INMUTABLE_CACHE = 'inmutable-v2';

const APP_SHELL = [
    '/',
    'index.html',
    'styles.f0080354005001a24de8.css',
    'img/favicon.png',
    'js/app.js',
    'js/sw-utils.js',
    'espiral.d88986dab45b618db474.png',
    'manifest.json',
    'fractal3.6ebfe6f8c155c4fdd0d0',
    'main-es5.385e4f3e86eabadb47d6',
    'main-es2015.a65b24ad87e533415ab5',
    'polyfills-es5.a5ec2c5f9c4a8eba6d56',
    'polyfills-es2015.9aaba84b721d907ae919',
    'runtime-es5.ee2dcdf2e59a31c9da78',
    'runtime-es2015.27965c48d77c449cb93c',
    'scripts.859e64cef1ef944f8beb',
    'https://drive.google.com/file/d/1vGzc4JhTuhtSXD3rO8ZgnnurnKh7wA29/preview',
    'https://drive.google.com/file/d/1G95suzZvOJmrPBahBtH6lDXJYjuv2EE2/preview'
];

const APP_SHELL_INMUTABLE = [
    'js/libs/plugins/mdtoast.min.css',
    'js/libs/plugins/mdtoast.min.js'
];

self.addEventListener('install', e => {

    const cacheStatic = caches.open(STATIC_CACHE).then(cache => {
        cache.addAll(APP_SHELL);
    });

    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache =>
        cache.addAll(APP_SHELL_INMUTABLE));


    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});

self.addEventListener('active', e => {

    const respuesta = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key);
            }

            if (key !== DYNAMIC_CACHE && key.includes('dynamic')) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil(respuesta);

});

self.addEventListener('fetch', e => {

    let respuesta = caches.match(e.request).then(res => {

        if (res) {

            actualizaCacheStatico(STATIC_CACHE, e.request, APP_SHELL_INMUTABLE);
            return res;

        } else {

            return fetch(e.request).then(newRes => {

                return actualizaCacheDinamico(DYNAMIC_CACHE, e.request, newRes);

            });

        }

    });


    e.respondWith(respuesta);

});