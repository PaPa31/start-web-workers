onconnect = function (e) {
    var port = e.ports[0];
    port.postMessage('Hello World!');
    port.onmessage = function (e) {
        port.postMessage('pong'); // Not e.ports[0].postMessage!
        // e.target.postMessage('pong'); // Also works
    }
}