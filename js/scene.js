//开局
function start(){
if(jumpProcess!=null) clearInterval(jumpProcess)
if(moveProcess!=null) clearInterval(moveProcess)
drawInfo()

if(level<levelMap.length){
createObstacles(level)
setTimeout(fallDown,1)
}
else{
win();
}
}



//重置
function reset(){
drawInfo()
//setTimeout(function(){ctx.clearRect(0,0,1200,500); },1)
//如果不用延时清除画布，无论如何都无法将死后滞留的方块图像清除。
//ctx.clearRect(0,0,1200,500)
//比如这样直接写，毫无作用

setTimeout(fallDown,1)
//delete 如果用这个，在即将平移到柱体时跳跃，会出现严重BUG，方块会乱飞。
//之前是这样的情况，经过研究，我发现应该还是定时器引起的问题。调整后好了

//fallDown()
isStart=true;
}





//通关胜利
function win(){
ctx.fillText("YOU WIN !!!", canvas.width/3, canvas.height/4);
ctx.fillText("press any key to restart",  canvas.width/7, canvas.height/2);

if(jumpProcess!=null) clearInterval(jumpProcess)
if(moveProcess!=null) clearInterval(moveProcess)

isStart=false;
isWin=true;
isJumping = false;
}

