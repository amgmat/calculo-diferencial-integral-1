var url = window.location.href;
var swLocation = '/calculo-diferencial-integral-I/sw.js';

if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swLocation = '/sw.js';
    }
    // navigator.serviceWorker.register('/sw.js');
    navigator.serviceWorker.register(swLocation);
}