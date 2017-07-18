canvas1 = document.getElementById("canvas5");
var ctx6 = canvas5.getContext("2d");



var startPostion = 0,
	startPostion1 = 0,
	startPostion2 = 0,
	startPostion3 = 0,
	startPostion4 = 0,
	startPostion5 = 0,
	rgb_r = "21",
	rgb_g = "96",
	rgb_b = "f3",
	expProcess, time = 0,
	isGoing = false;

function drawExplosive(v1, v2, v3, v4, v5, v6, a1, a2, a3, a4, a5, a6) {

	ctx6.clearRect(-1000, -1000, 2000, 2000);
	if (time < 30) {
		ctx6.fillStyle = "#" + rgb_r + rgb_g + rgb_b;

		ctx6.save();
		ctx6.rotate(a1 * Math.PI / 180);
		ctx6.fillRect(startPostion + v6, 0, 10, 10);
		ctx6.restore();

		ctx6.save();
		ctx6.rotate(a2 * Math.PI / 180);
		ctx6.fillRect(startPostion1 + v1, 0, 10, 10);
		ctx6.restore();


		ctx6.save();
		ctx6.rotate(a3 * Math.PI / 180);
		ctx6.fillRect(startPostion2 + v2, 0, 10, 10);
		ctx6.restore();

		ctx6.save();
		ctx6.rotate(a4 * Math.PI / 180);
		ctx6.fillRect(startPostion3 + v3, 0, 10, 10);
		ctx6.restore();

		ctx6.save();
		ctx6.rotate(a5 * Math.PI / 180);
		ctx6.fillRect(startPostion4 + v4, 0, 10, 10);
		ctx6.restore();

		ctx6.save();
		ctx6.rotate(a6 * Math.PI / 180);
		ctx6.fillRect(startPostion5 + v5, 0, 10, 10);
		ctx6.restore();






		startPostion += v1;
		startPostion1 += v2;
		startPostion2 += v3;
		startPostion3 += v4;
		startPostion4 += v5;
		startPostion5 += v6;

		time++;





		rgb_r = parseInt(rgb_r, 16)
		rgb_g = parseInt(rgb_g, 16)
		rgb_b = parseInt(rgb_b, 16)
		if (rgb_r < 251) {
			rgb_r += 8
		}
		if (rgb_b < 251) {
			rgb_b += 8
		}
		if (rgb_g < 251) {
			rgb_g += 8
		}
		rgb_r = rgb_r.toString(16)
		rgb_g = rgb_g.toString(16)
		rgb_b = rgb_b.toString(16)

	} else {

		ctx6.restore();
		ctx6.clearRect(0, 0, 650, 350);
		clearInterval(expProcess)
		startPostion = 0;
		startPostion1 = 0
		startPostion2 = 0
		startPostion3 = 0
		startPostion4 = 0
		startPostion5 = 0
		time = 0;
		rgb_r = "21"
		rgb_g = "96"
		rgb_b = "f3"

		isGoing = false;

	}

}

//////////////////±¬Õ¨Àà//////////////////////////

function explosive() {
	var initialVelocity = Math.floor(6 * Math.random() + 1),
		initialVelocity1 = Math.floor(6 * Math.random() + 1),
		initialVelocity2 = Math.floor(6 * Math.random() + 1),
		initialVelocity3 = Math.floor(6 * Math.random() + 1),
		initialVelocity4 = Math.floor(6 * Math.random() + 1),
		initialVelocity5 = Math.floor(6 * Math.random() + 1),
		a1 = Math.floor(360 * Math.random()),
		a2 = Math.floor(360 * Math.random()),
		a3 = Math.floor(360 * Math.random()),
		a4 = Math.floor(360 * Math.random()),
		a5 = Math.floor(360 * Math.random()),
		a6 = Math.floor(360 * Math.random());

	ctx6.save();
	ctx6.translate(playerX + 20, 330 - playerY);
	expProcess = setInterval(function() {
		drawExplosive(initialVelocity, initialVelocity1, initialVelocity2, initialVelocity3, initialVelocity4, initialVelocity5, a1, a2, a3, a4, a5, a6)
	}, 16)



}


//////////////////±¬Õ¨Àà//////////////////////////

function bloom() {
	if (!isGoing) {
		explosive()
		isGoing = true;
	}
}