// Functions

// Colour Function 
function stroke(color) {
    ctx.strokeStyle = color;
}

function fill(color) {
    ctx.fillStyle = color;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function font(fontSetting) {
    ctx.font = fontSetting;
}

// Line Function 
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, mode);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h)
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

//Background Function (Fill Canvas with provided colors)
function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
}