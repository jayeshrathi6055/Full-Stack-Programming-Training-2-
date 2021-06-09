function start() {
    // Taking Inputs
    let hour = Number(document.getElementById('hours').value);
    let second = Number(document.getElementById('seconds').value);
    let minute = Number(document.getElementById('minutes').value);
    let btn = document.getElementById('btn')

    // If second is something
    if (second > 0) {
        // part of functionality
        document.getElementById("hours").disabled = true;
        document.getElementById("minutes").disabled = true;
        document.getElementById("seconds").disabled = true;
        document.getElementById("btn").disabled = true;
        btn.innerText = 'Resume'

        // Decrement in Second
        document.getElementById('seconds').value = second - 1
        var time = setTimeout(start, 1000)
    }

    // If minute is something
    else if (minute > 0) {
        // Decrement in Minute and set second
        document.getElementById('minutes').value = minute - 1
        document.getElementById('seconds').value = 60
        var time1 = setTimeout(start, 500)
    }

    // If hour is something
    else if (hour > 0) {
        // Decrement in hour and set minute
        document.getElementById('hours').value = hour - 1
        document.getElementById('minutes').value = 60
        var time2 = setTimeout(start, 500)
    }

    // part of fuctionality
    else if (second == 0) {
        btn.innerText = 'Start'
        document.getElementById("hours").disabled = false;
        document.getElementById("minutes").disabled = false;
        document.getElementById("seconds").disabled = false;
    }

    // To pause timer by clearing all Timeout
    pause.addEventListener('click', function () {
        clearTimeout(time)
        clearTimeout(time1)
        clearTimeout(time2)
        // part of functionality
        document.getElementById("btn").disabled = false;
    })
}

function reset() {
    // Set reset value
    document.querySelector('#hours').value = 0
    document.querySelector('#minutes').value = 0
    document.querySelector('#seconds').value = 0
    // part of functionality
    let btn = document.getElementById('btn')
    btn.innerText = 'Start'
    document.getElementById("hours").disabled = false;
    document.getElementById("minutes").disabled = false;
    document.getElementById("seconds").disabled = false;
    document.getElementById("btn").disabled = false;
}
