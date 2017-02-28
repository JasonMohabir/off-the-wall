var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "red";


var circle = document.getElementById('circle');
var dvd = document.getElementById('dvd');
var stop = document.getElementById('stop');
var rid = 0;

//closure in functional programming 

var animateCircle = function(){
    var rad = 0;
    var d_rad = 1;
    
    window.cancelAnimationFrame(rid);
    
    var drawCircle = function(){
	ctx.clearRect(0,0,c.width,c.height);

	console.log(rid);
	ctx.beginPath();
	ctx.arc( c.width/2, c.height/2, rad, 0, Math.PI * 2);
	ctx.fill();

	if (rad == c.height/2) { d_rad = -1;} 
	else if (rad == 0) {d_rad = 1;}
	rad += d_rad;
	rid = window.requestAnimationFrame(drawCircle);
    };

    drawCircle();
    
};
    


var loadDVD = function() {
    //random start + create starting velocity
    var x = Math.random()*c.width; 
    var y = Math.random()*c.height;
    var xvol = 1;
    var yvol = 1;
    var offset = 10;
    
    window.cancelAnimationFrame( rid );

    var drawDVD = function() {
	ctx.clearRect(0,0,c.width,c.height);
	console.log(rid);

	ctx.beginPath();
	ctx.strokeRect(x,y,10,10);

	if (x>=c.width-offset) { xvol = -1; }
	if (y>=c.height-offset) { yvol = -1; }
	if (x<=0) { xvol = 1; }
	if (y<=0) { yvol = 1; }
	
	x+= xvol;
	y+= yvol;

	rid = window.requestAnimationFrame( drawDVD );
    };

    drawDVD();
}


var stopIt = function(){
    window.cancelAnimationFrame( rid );
}


circle.addEventListener( 'click', animateCircle );
dvd.addEventListener( 'click', loadDVD );
stop.addEventListener( 'click', stopIt );
