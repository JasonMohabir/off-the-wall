var s = document.getElementById("svg");
var c = document.getElementById("clear");

var prevX;
var prevY;

function drawDot(e) {
    var x = e.offsetX;
    var y = e.offsetY;
        
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", prevX ? prevX: x);
    line.setAttribute("y1", prevY ? prevY: y);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.setAttribute("style", "stroke: lightsteelblue; stroke-width:2px");

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", "red");

    s.appendChild(circle);
    s.appendChild(line);

    prevX = x;
    prevY = y;
}

function clear() {
    while (s.firstChild) {
	s.removeChild(s.firstChild);
    }
    prevX = prevY = undefined;

}

s.addEventListener("click", drawDot);
c.addEventListener("click", clear);