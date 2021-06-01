let id;

function countdown(num) {
    id = setInterval(function () {
        num--;
        if (num === 0) {
            console.log("DONE!");
            stopCountdown();
        } else {
            console.log(num);
        }

    }, 1000);
}

function stopCountdown() {
    clearTimeout(id);
}

countdown(4);