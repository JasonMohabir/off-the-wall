var svg = document.getElementById("svg");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

var rid;


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


var makeImg = function(x, y, h, w, link){
    
    var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
    
    c.setAttribute("xlink:href", link);
    c.setAttribute("x", x);
    c.setAttribute("y", y);
    c.setAttribute("height", h);
    c.setAttribute("width", w);
    
    return c;
    
};



var loadDVD = function(){

    clear();
    window.cancelAnimationFrame(rid);
    var xVel = 2;
    var yVel = 2;
    var x = width / 4 + Math.random() * width / 2;
    var y = height / 4 + Math.random() * height / 2;
    var imgW = width/6;
    var imgH = height/6;
    var speed = 2;
    var xDir = 1, yDir = 1;
    
    var c = makeImg(x, y, imgH, imgW, imgLink);
    svgImage.appendChild(c);
    
    var anim = function(){
	
	xVel = xDir * speed;
	yVel = yDir * speed;
	x += xVel * speed;
	y += yVel * speed;

	c.setAttribute("x", x.toString());
	c.setAttribute("y", y.toString());
	
	if (xVel >= 0 && x + imgW >= width){
	    xDir = -1;
	}
	if (xVel <= 0 && x <= 0){
	    xDir = 1;
	}
	if (yVel >= 0 && y + imgH >= height){
	    yDir = -1;
	}
	if (yVel <= 0 && y <= 0){
	    yDir = 1;
	}
	
	rid = window.requestAnimationFrame(anim);
	
    }
    
    anim();
    
    
};

var stopIt = function(){
    window.cancelAnimationFrame(rid);
};

circle.addEventListener( 'click', animateCircle );
dvd.addEventListener( 'click', loadDVD );
stop.addEventListener( 'click', stopIt );
clear.addEventListener("click", clearIt);

