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
	this.fix = function(x,y) {
		this.x_go=x;
		this.y_go=y;
	}
	this.eat = function() {
		if (this.x == food_x && this.y == food_y){
			food_locate();
			this.total++;
			this.pos[this.total-1]=[];
		}
	}
	this.show = function() {
		for (var i=0;i<this.total;i++){
		{
			for (var j=i+1;j<this.total;j++)
			if (this.pos[i][0]==this.pos[j][0] && this.pos[i][1]==this.pos[j][1])
				end_game();
			if (this.pos[i][0]<0)
				this.pos[i][0]+=width;
			if (this.pos[i][0]>=width)
				this.pos[i][0]-=width;
			if (this.pos[i][1]<0)
				this.pos[i][1]+=height;
			if (this.pos[i][1]>=height)
				this.pos[i][1]-=height;
		}
		if (i==0) fill(255, 255, 0);
		else fill(255);
		rect(this.pos[i][0],this.pos[i][1],scl,scl);
		}
	}
}
