var start;
onmessage = getStart;
function getStart(event) {
    start = 1 * event.data;
    onmessage = getEnd;
}

var end;
function getEnd(event) {
    end = 1 * event.data;
    onmessage = null;
    work();
}

function work() {
    var result = 0;
    for (var i = start; i < end; i += 1) {
        // Perform some complex calculation here
        result += 1;
    }
    postMessage(result);
    close();
}

// They receive two numbers in two events, perform the computation for the range of numbers thus specified, and then report the result back to the parent.