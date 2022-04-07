// Setup Canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext('2d');
cnv.height = 700;
cnv.width = 1000;

// Variables for Player
let x = 10;
let y = 10;
let w = 15;
let h = 15;

// Variable for Obs Array
let obstacleArray = obsArray(1000);


requestAnimationFrame(draw);

function draw() {

    // Clear Canvas
    background("black");

    // Draw Player
    fill("green");
    rect(x, y, w, h, "fill");

    // Draw Obs
    for(let i = 0; i < snow.length; i++) {
        drawObs(obstacleArray[i]);
    }
    requestAnimationFrame(draw);    
}

// Event Listener
addEventListener("keydown", movePlayer);

// Function to move player w/ Key Presses
function movePlayer(event) {
    if (event.keyCode == 68) {
        x += 2;
    } else if (event.keyCode == 65) {
        x -= 2;
    } else if (event.keyCode == 87) {
        y -= 2;
    } else if (event.keyCode == 83) {
        y += 2;
    }
}

// Create Ojects
function createObsObjects() {
    return {
        x: 100,
        y: randomInt(0, 700),
        r: 10
    }
}

// Global Open Array for pusghing values
let array = [];

// Create Array and Return with total obstacles
function obsArray(total) {
    for (let n = 1; n <= total; n++) {
        array.push(createObsObjects())
    }
    return array;

    // Make Game Harder 


    // If statement to increase total obstacles to avoid


    // If statement to make speed increase after max asteroids


}

// Function to Draw Obs
function drawObs (obs) {
    fill("blue");
    circle(obs.x, obs.y, obs.r, "fill");
}

// Key Press to Begin the Game
function gameStart() {

}