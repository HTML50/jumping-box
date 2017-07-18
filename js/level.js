canvasBg = document.getElementById("background");
ctxBg = canvasBg.getContext("2d");
ctxBg.fillStyle = "#9b59b6";

var objWidth = 26;

//�����ϰ���

function createObstacles(level) {
	ctxBg.clearRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i < levelMap[level].length; i++) {
		if (levelMap[level][i] < 100) {
			drawObstacle(i, levelMap[level][i]);
		} else if (levelMap[level][i] == 'f') {
			drawFloat(i);
		}
	}

}

//�ϰ�����ֶ���

function drawObstacle(position, height) {
	var objHeight = 0,
		thisProcess = setInterval(function() {
			if (objHeight < height) {
				ctxBg.fillRect(objWidth * position, canvas.height - objHeight, objWidth, objHeight);
				objHeight += 1;
			} else {
				clearInterval(thisProcess);
			}
		}, 5);
}

//���������߶�Ϊ20

function drawFloat(position) {
	var objHeight = 0,
		thisProcess = setInterval(function() {
			if (objHeight < 20) {
				ctxBg.fillRect(objWidth * position, canvas.height - objHeight - playerRadius * 2 - 1, objWidth, objHeight);
				objHeight += 1;
			} else {
				clearInterval(thisProcess);
			}
		}, 5);
}