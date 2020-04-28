function snake(){
	this.x=0;
	this.y=0;
	this.x_go=0;
	this.y_go=0;
	this.total=1;
	this.pos=[];
	this.pos[0]=[0,0];
	this.update = function() {
		this.x+=this.x_go*scl;
		this.y+=this.y_go*scl;
		if (this.x<0)
			this.x+=width;
		if (this.x>width)
			this.x-=width;
		if (this.y<0)
			this.y+=height;
		if (this.y>height)
			this.y-=height;
		for (var i=this.total-1;i>0;i--){
			this.pos[i][0]=this.pos[i-1][0];
			this.pos[i][1]=this.pos[i-1][1];
		}
		this.pos[0]=[this.x,this.y];
	}
	this.eatSound=new Audio();
	this.eatSound.src= "Bounce_1.wav";
	this.fix = function(x,y) {
		this.x_go=x;
		this.y_go=y;
	}
	var p = true;
	this.eat = function() {
		if ((this.x == food_x && this.y == food_y) || (dist(this.x,this.y,food_x,food_y)<1)){
			p=true;
			this.eatSound.play();
			while (p)
				{
					food_locate();
					for (var i=0;i<this.total;i++)
						if (food_x==this.pos[i][0] && food_y==this.pos[i][1])
							{
								food_locate();
								p=true;
								break;
							}
						else p=false;
				}
			this.total++;
			this.pos[this.total-1]=[];
		}
	}
	this.show = function() {
		if (this.x<0)
			this.x+=width;
		if (this.x>=width)
			this.x-=width;
		if (this.y<0)
			this.y+=height;
		if (this.y>=height)
			this.y-=height;
		for (var i=0;i<this.total;i++){
			if ((i>0) && (this.pos[i][0]==this.x && this.pos[i][1]==this.y)){
				end_game();
				break;
			}
			if (this.pos[i][0]<0)
				this.pos[i][0]+=width;
			if (this.pos[i][0]>=width)
				this.pos[i][0]-=width;
			if (this.pos[i][1]<0)
				this.pos[i][1]+=height;
			if (this.pos[i][1]>=height)
				this.pos[i][1]-=height;
		if (i==0) fill(255, 255, 0);
		else fill(255);
		rect(this.pos[i][0],this.pos[i][1],scl,scl);
		}
	}
}
