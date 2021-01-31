// Challenge 1 : Age In Days
function getAgeInDays() {
    var birthYear = prompt("What year were you born?")
    var currentYear = new Date().getFullYear()
    var ageInDays = (currentYear - birthYear) * 365

    var h1 = document.createElement("h1")
    var answer = document.createTextNode("You are " + ageInDays + " days old.")

    h1.setAttribute("id", "ageInDays")
    h1.appendChild(answer)

    document.getElementById("flexbox-result").appendChild(h1)
}

function reset() {
    document.getElementById("ageInDays").remove()
}