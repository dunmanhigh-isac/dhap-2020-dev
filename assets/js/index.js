let launchDate = new Date("2019-02-10T00:00+08:00");
let startDate = new Date("2020-06-02T07:45+08:00");
let endDate = new Date("2019-06-04T21:00+08:00");

let showCountdown = function() {
    let diffToStart = startDate - new Date();
    let diffToEnd = endDate - new Date();

    if (diffToStart > 0) {
        let days = Math.floor(diffToStart / 24 / 60 / 60 / 1000); // (24 * 60 * 60 * 1000)
        diffToStart -= days * 24 * 60 * 60 * 1000;
        let hours = Math.floor(diffToStart / 60 / 60 / 1000); // (60 * 60 * 1000)
        diffToStart -= hours * 60 * 60 * 1000;
        let minutes = Math.floor(diffToStart / 60 / 1000); // (60 * 1000)
        diffToStart -= minutes * 60 * 1000
        let seconds = Math.floor(diffToStart / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('days__rect').style.strokeDashoffset = (1000 - (hours / 24) * 1000);
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('hours__rect').style.strokeDashoffset = (1000 - (minutes / 60) * 1000);
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('minutes__rect').style.strokeDashoffset = (1000 - (seconds / 60) * 1000);
        
    } else if (diffToEnd > 0) {
        let digits = document.getElementsByClassName('countdown__digits');
        for (var i = 0; i < digits.length; i++) {
            digits[i].style.display = "none";
        }
        document.getElementById('countdown__over').style.display = "block";
        document.getElementById('countdown__over').innerText = "DHAP in progress"
    } else {
        let digits = document.getElementsByClassName('countdown__digits');
        for (var i = 0; i < digits.length; i++) {
            digits[i].style.display = "none";
        }
        document.getElementById('countdown__over').style.display = "block";
    }

};

showCountdown();

setInterval(showCountdown, 1000)