
///////////////////////跳跃/////////////////////
function jump(){
jumpAudio.play()
isJumping = true;
if(moveProcess!=null) clearInterval(moveProcess)
jumpProcess = setInterval(jumpUp,playSpeed)
}


function jumpUp(){
		if(v0>0){
		s=v0*t-0.5*g*t*t
		v0=v0-g*t
		angle+=spin;
		drawJumping(playerY,angle)
		playerY+=s
		}
		else{
		clearInterval(jumpProcess)
		jumpProcess = setInterval(jumpDown,playSpeed)
		}
}

function jumpDown(){
		if(v0<vt){
		s=v0*t+0.5*g*t*t
		v0=v0+g*t
		drawJumping(playerY,angle)
		playerY-=s;
		angle+=spin
		}
		else{
		clearInterval(jumpProcess)
		isJumping = false;
		angle=0
		playerY=15
		moveProcess = setInterval(move,playSpeed)
		}
}





/////////////////////水平移动/////////////////////
function move(){
clearPlayer()
ctx.fillRect(playerX-playerRadius,canvas.height-playerRadius*2,playerRadius*2,playerRadius*2);
playerX+=playerMoveSpeed;
}


/////////////////////初始下落/////////////////////
function fallDown(){
if(jumpProcess!=null) clearInterval(jumpProcess)
if(moveProcess!=null) clearInterval(moveProcess)
ctx.clearRect(0,100,canvas.width,canvas.height); 
playerY=90;
//从120落下
playerX=playerRadius+10
v0=0;
isJumping = true;
moveProcess = setInterval(fallDownProcess,playSpeed)
}

function fallDownProcess(){
	if(playerY>playerRadius){
	s=v0*t+0.5*2000*t*t
	v0=v0+2000*t
	playerY-=s
	drawFalling(playerY)
	}
	else{
	clearInterval(moveProcess)
	moveProcess = setInterval(move,playSpeed)
	isJumping = false;
	s=0
	v0=vt
	}
}
