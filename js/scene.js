//开局

function start() {

	if (jumpProcess != null) clearInterval(jumpProcess)
	if (moveProcess != null) clearInterval(moveProcess)

	if (level < levelMap.length) {
		drawInfo()
		createObstacles(level)
		setTimeout(fallDown, 1)
	} else {
		setTimeout(win, 1)
	}

}



//重置

function reset() {
	drawInfo()
	//setTimeout(function(){ctx.clearRect(0,0,1200,500); },1)
	//如果不用延时清除画布，无论如何都无法将死后滞留的方块图像清除。
	//ctx.clearRect(0,0,1200,500)
	//比如这样直接写，毫无作用

	setTimeout(fallDown, 1)
	//delete 如果用这个，在即将平移到柱体时跳跃，会出现严重BUG，方块会乱飞。
	//之前是这样的情况，经过研究，我发现应该还是定时器引起的问题。调整后好了

	//fallDown()
	isStart = true;
}





//通关胜利

function win() {
	if (jumpProcess != null) clearInterval(jumpProcess)
	if (moveProcess != null) clearInterval(moveProcess)

	isStart = false;
	isWin = true;
	isJumping = false;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctxBg.clearRect(0, 0, canvasBg.width, canvasBg.height);

	ctx.fillText("you finally finished the game! T_T", 50, canvas.height / 4);
	ctx.fillText("and dead " + death + " times", 200, 130);
	ctx.fillText("can you do better ? :-D", 130, 200);
	ctx.fillText("ENTER to restart", 200, 260);

}