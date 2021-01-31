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

// Challenge 2 : Cat Generator
function generateCat() {
    var image = document.createElement("img")
    var div = document.getElementById("flex-cat-gen")
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)
}

// Challenge 3 : Rock - Paper - Scissors

var choices = ["rock", "paper", "scissors"]

// Function : Main Gameplay
function rpsGame(yourChoice) {
    var humanChoice, computerChoice
    humanChoice = yourChoice.id
    computerChoice = numberToChoice(randomToNumber())
    results = decideWinner(humanChoice, computerChoice)
    message = getMessage(results)
    startGame(yourChoice.id, computerChoice, message)
}

// Function : Returning a random integer number from 0 - 2
function randomToNumber() {
    return Math.floor(Math.random() * 3)
}

// Function : Returning Choice from a number
function numberToChoice(number) {
    return choices[number]
}

// Function : Decide Winner of the game
function decideWinner(yourChoice, computerChoice) {

    // Points Table for each individual choices
    var pointsDatabase = {
        "rock" : {
            "rock" : 0.5,
            "paper" : 0,
            "scissors" : 1,
        },
        "paper" : {
            "rock" : 1,
            "paper" : 0.5,
            "scissors" : 0,
        },
        "scissors" : {
            "rock" : 0,
            "paper" : 1,
            "scissors" : 0.5,
        },
    }

    var yourScore = pointsDatabase[yourChoice][computerChoice]
    var computerScore = pointsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

// Function : Get Message
function getMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            "message" : "You Lost! 😞",
            "color" : "red",
        }
    } else if (yourScore === 0.5) {
        return {
            "message" : "Match Tied!",
            "color" : "black",
        }
    } else {
        return {
            "message" : "You Won! 😀",
            "color" : "green",
        }
    }
}

// Function : Starting the Game on Frontend
function startGame(humanImageChoice, computerImageChoice, finalMessage) {

    // Database for Images
    var imagesDatabase = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src,
    }

    // Removing all the images
    document.getElementById("rock").remove()
    document.getElementById("paper").remove()
    document.getElementById("scissors").remove()

    var humanDiv = document.createElement("div")
    var computerDiv = document.createElement("div")
    var messageDiv = document.createElement("div")

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)' />"
    document.getElementById("flexbox-rps-div").appendChild(humanDiv)

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage["color"] + ";'>" + finalMessage["message"] + "</h1>"
    document.getElementById("flexbox-rps-div").appendChild(messageDiv)

    computerDiv.innerHTML = "<img src='" + imagesDatabase[computerImageChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)' />"
    document.getElementById("flexbox-rps-div").appendChild(computerDiv)

}

// Challenge 4 : Change the Color of All Buttons

const RED = "btn-danger"
const GREEN = "btn-success"
const BLUE = "btn-primary"
const YELLOW = "btn-warning"
const BLACK = "btn-dark"

var all_buttons = document.getElementsByTagName("button")

var copyAllButtons = []

//  Duplicating all buttons for future reference (Important While reseting color)
for (let button = 0; button < all_buttons.length; button++) {
    copyAllButtons.push(all_buttons[button].classList[1]) // Getting the 2nd class of each button
}

// Function : Changing Button Color
function buttonColorChange(aButton) {

    if (aButton.value === "red") {
        colorButtonRed()
    } else if (aButton.value === "green") {
        colorButtonGreen()
    } else if (aButton.value === "reset") {
        resetButtonColor()
    } else if (aButton.value === "random") {
        colorButtonRandom()
    }

}

// Function : Color All Buttons to Red
function colorButtonRed() {
    for (let button = 0; button < all_buttons.length; button++) {
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(RED)
    }
}

// Function : Color All Buttons to Green
function colorButtonGreen() {
    for (let button = 0; button < all_buttons.length; button++) {
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(GREEN)
    }
}

// Function: Resetting All Buttons Colors to Originals
function resetButtonColor() {
    for (let button = 0; button < all_buttons.length; button++) {
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(copyAllButtons[button])
    }
}

// Function : Painting Random Colors to All Buttons
function colorButtonRandom() {
    let choices = [RED, BLUE, GREEN, YELLOW, BLACK]

    for (let button = 0; button < all_buttons.length; button++) {
        var randomNumber = Math.floor(Math.random() * 5)
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(choices[randomNumber])
    }
}