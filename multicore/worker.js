// Settings
var num_workers = 10;
var items_per_worker = 1000000;

// Start the workers
var result = 0;
var pending_workers = num_workers;
for (var i = 0; i < num_workers; i += 1) {
    var worker = new Worker('core.js');
    worker.postMessage(i * items_per_worker);
    worker.postMessage((i + 1) * items_per_worker);
    worker.onmessage = storeResult;
}

// handle the results
function storeResult(event) {
    result += 1 * event.data;
    pending_workers -= 1;
    if (pending_workers <= 0)
        postMessage(result); // Finished!
}

// It consists of a loop to start the subworkers, and then a handler that waits for all the subworkers to respond.

