var svg = document.getElementById("svg");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

var rid;

var imageLink = "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Dvd-video-logo.svg/1280px-Dvd-video-logo.svg.png";

var clearIt = function() {
    while (svg.firstChild) {
	svg.removeChild(svg.firstChild);
    }
};


var animateCircle = function(){

    clearIt();
    window.cancelAnimationFrame(rid);

    var r = 0;
    var d_rad= 1;

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", width/2);
    c.setAttribute("cy", height/2);
    c.setAttribute("r", r);    
    c.setAttribute("fill", "black");

    svg.appendChild(c);

    var drawCircle = function(){

        if (r == height/2) { d_rad = -1;}
        else if (r == 0) {d_rad = 1;}

	r += d_rad

	c.setAttribute("r", r.toString());
	
	rid = window.requestAnimationFrame(drawCircle);
	
    };
    drawCircle();
    
};

var loadDVD = function(){

    clearIt();

    window.cancelAnimationFrame(rid);

    var xvol = 1;
    var yvol = 1;

    var x = Math.random()*width;
    var y = Math.random()*height;

    var image_w = width/8;
    var image_h = height/8;
    var offset = 50;

    //var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
    var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");  
    c.setAttribute("x", x);
    c.setAttribute("y", y);
    c.setAttribute("width", 50);
    c.setAttribute("height", 50);
    c.setAttribute("fill", "black");

    svg.appendChild(c);
    
    var drawDVD = function(){
		
	x += xvol;
	y += yvol;

	c.setAttribute("x", x.toString());
	c.setAttribute("y", y.toString());

        if (x>=width-offset) { xvol = -1; }
        if (y>=height-offset) { yvol = -1; }
        if (x<=0) { xvol = 1; }
        if (y<=0) { yvol = 1; }
	
	rid = window.requestAnimationFrame(drawDVD);
    }
    
    drawDVD();    
    
};

var stopIt = function(){
    window.cancelAnimationFrame(rid);
};

circle.addEventListener( 'click', animateCircle );
dvd.addEventListener( 'click', loadDVD );
stop.addEventListener( 'click', stopIt );
clear.addEventListener("click", clearIt);

