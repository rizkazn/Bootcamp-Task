function runTime (duration) {
    var timer = duration, minutes, seconds
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        console.log(minutes + ":" + seconds)

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000) 
    duration = 60 * runTime() 
}

runTime(2)
