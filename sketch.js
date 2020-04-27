function setup(){
	frameRate(15);
	createCanvas(600,600);
}
var x=15;
function end_game(){
	alert("YOU LOSE!!!!! YOUR SCORE: " + s.total);
	window.location.reload();	
}
var s=new snake();
var scl=10;
var food_x=0;
var food_y=0;
var last_press="";
function food_locate(){
	food_x=Math.floor(Math.random()*600);
	food_x=food_x-(food_x%scl);
	food_y=Math.floor(Math.random()*600);
	food_y=food_y-(food_y%scl);
}
function keyPressed(){
	if (keyCode == UP_ARROW && last_press != "D"){
					s.fix(0,-1);
					last_press="U";
				}
	if (keyCode == DOWN_ARROW && last_press != "U"){
				last_press="D";
				s.fix(0,1);
	}
	if (keyCode == LEFT_ARROW && last_press != "R"){
				last_press ="L";
				s.fix(-1,0);
			}
	if (keyCode == RIGHT_ARROW && last_press != "L"){
				last_press="R";
				s.fix(1,0);
	}
}
food_locate();
function draw(){
	background(50);
	s.eat();
	s.update();
	s.show();
	x=parseInt(document.getElementById("difficulty").value);
	frameRate(x);
	fill(255,0,0);
	rect(food_x,food_y,scl,scl);
}
