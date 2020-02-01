let dates = document.getElementsByClassName("schedule__day__title");
let events = document.getElementsByClassName("schedule__day__event");

let updateSchedule = function(time) {
    for (var i = 0; i < dates.length; i++) {
        let date = dates[i].dataset.date;
        if (!date) { continue; }

        let eventDate = new Date(date);
        let currentTime = new Date();
        if (currentTime > eventDate) {
            dates[i].classList.add("filled");
        }
    }

    for (var i = 0; i < events.length; i++) {
        let event = events[i].dataset.time;
        if (!event) { continue; }

        let eventDate = new Date(event);
        let currentTime = new Date();
        if (currentTime > eventDate) {
            events[i].classList.add("filled");
        }
    }
}

updateSchedule()