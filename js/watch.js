let tikTok = document.querySelector("#watch")
let day = document.querySelector("#day")
let date = document.querySelector("#date")

function watch () {
    let days = ["sunday", "monday", "tuesday", "wednesday", "thirsday", "friday", "saturday"]
    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "octobet", "november", "december"]
    let time = new Date()
    let dom = time.getDate()
    let month = time.getMonth()
    let y = time.getFullYear()
    let d = time.getDay()
    let h = time.getHours()
    let m = time.getMinutes()

    if (h < 10) {
        h = "0" + h
    }

    if (m < 10) {
        m = "0" + m
    }

    let watchString = h +":"+ m;
    let dayString = days[d]
    let dateString = dom + " " + months[month] + " " + y
    
    tikTok.textContent = watchString
    day.textContent = dayString
    date.textContent = dateString
}

setInterval(watch, 1000)
watch()