let canvas = null

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    rePositionCanvas()
}

function draw() {
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)  
    rePositionCanvas()
}

function rePositionCanvas() {
    canvas.position(0, 0)
}