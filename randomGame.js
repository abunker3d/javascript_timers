let id;
function randomGame() {
    let counter = 0;
    id = setInterval(function () {
        // select random number
        const randNum = Math.random();
        console.log(randNum);
        // add one to counter
        counter++;
        // if number > .75, stop timer and console counter
        if (randNum > .75) {
            console.log(`It took ${counter} tries before we found a number greater than .75`);
            stopRandomGame();
        }

    }, 1000);
}

function stopRandomGame() {
    clearInterval(id);
}

randomGame();