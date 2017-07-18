//绘制方块的函数

function drawJumping(playerY, angle) {
	clearPlayer()
	ctx.save();
	ctx.translate(playerX, canvas.height - playerY)
	ctx.rotate(angle * Math.PI / 360)
	ctx.fillRect(-playerRadius, -playerRadius, playerRadius * 2, playerRadius * 2);
	ctx.restore();
	playerX += playerMoveSpeed;
}

//下降过程

function drawFalling(playerY) {
	ctx.clearRect(10, 200, playerRadius * 2, 200);
	ctx.fillRect(10, canvas.height - playerRadius * 1.3 - playerY, playerRadius * 2, playerRadius * 2);
	//此处1.3系数是用来修正落地后的离地面距离，因为有重力的存在，方块加速落地时，超出判断条件后，下落距离控制不了，导致砸进地面。
}


//清除canvas方块图形

function clearPlayer() {
	ctx.clearRect(0, 100, canvas.width, canvas.height);

	//失败&胜利条件
	if (playerX >= canvas.width - playerRadius) {
		level++;
		start()
	}

	if (collision(level)) {
		gameoverAudio.play()
		death++;
		bloom()
		reset()
	}

}


function drawInfo() {
	ctx.clearRect(0, 0, 650, 100);
	ctx.fillText(death, 100, 60);


	if (death > 50 && death <= 100) {
		ctx.font = "20px Consolas";
		ctx.fillText("有些窄的地方需按住键不松连跳通过", 150, 60);
		ctx.font = "30px Consolas";
	} else if (death > 100 && death <= 150) {
		ctx.font = "20px Consolas";
		ctx.fillText("一个键不好用，可以尝试多个按键", 170, 60);
		ctx.font = "30px Consolas";
	} else if (death > 150 && death <= 300) {
		ctx.font = "20px Consolas";
		ctx.fillText("很多不好跳的地方，只能凭感觉", 170, 60);
		ctx.font = "30px Consolas";
	} else if (death > 300 && death <= 500) {
		ctx.font = "20px Consolas";
		ctx.fillText("烈士暮年，壮心不已", 230, 60);
		ctx.font = "30px Consolas";
	} else if (death > 500) {
		ctx.font = "20px Consolas";
		ctx.fillText("大哥你这么认真，是我该请你吃饭了", 170, 60);
		ctx.font = "30px Consolas";
	}

	ctx.fillText(level + "/" + (levelMap.length - 1), 500, 60);

}