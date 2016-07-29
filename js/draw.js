
//绘制方块的函数
function drawJumping(playerY,angle){
clearPlayer()
ctx.save();
ctx.translate(playerX, canvas.height-playerY)
ctx.rotate(angle*Math.PI/360)
ctx.fillRect(-playerRadius,-playerRadius,playerRadius*2,playerRadius*2);
ctx.restore();
playerX+=playerMoveSpeed;
}

//下降过程
function drawFalling(playerY){
ctx.clearRect(10,200,playerRadius*2,200); 
ctx.fillRect(10,canvas.height-playerRadius*1.3-playerY,playerRadius*2,playerRadius*2);
//此处1.3系数是用来修正落地后的离地面距离，因为有重力的存在，方块加速落地时，超出判断条件后，下落距离控制不了，导致砸进地面。
}


//清除canvas方块图形
function clearPlayer(){
	ctx.clearRect(0,100,canvas.width,canvas.height); 

	//失败&胜利条件
	if(playerX>=canvas.width-playerRadius){
	level++;
	start()
	}

	if(collision(level)){
	gameoverAudio.play()
	death++;
	bloom()
	reset()
	}

}


function drawInfo(){
ctx.clearRect(0,0,650,100); 
ctx.fillText(death, 100, 60);
ctx.fillText(level+"/"+levelMap.length, 500, 60);
	
}