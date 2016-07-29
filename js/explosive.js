
canvas6=document.getElementById("canvas");
canvas1=document.getElementById("canvas1");
canvas2=document.getElementById("canvas2");
canvas3=document.getElementById("canvas3");
canvas4=document.getElementById("canvas4");
canvas5=document.getElementById("canvas5");


var ctx6=canvas6.getContext("2d");
var ctx1=canvas1.getContext("2d");
var ctx2=canvas2.getContext("2d");
var ctx3=canvas3.getContext("2d");
var ctx4=canvas4.getContext("2d");
var ctx5=canvas5.getContext("2d");


var startPostion=0
var startPostion1=0
var startPostion2=0
var startPostion3=0
var startPostion4=0
var startPostion5=0
var time=0
var expProcess;
var rgb_r="21"
var rgb_g="96"
var rgb_b="f3"
var isGoing=false;

	function drawExplosive(initialVelocity,initialVelocity1,initialVelocity2,initialVelocity3,initialVelocity4,initialVelocity5){
	if(time<30){
	ctx6.clearRect(startPostion-1,-1,10,50); 
	ctx1.clearRect(startPostion1-1,-1,10,50); 
	ctx2.clearRect(startPostion2-1,-1,10,50); 
	ctx3.clearRect(startPostion3-1,-1,10,50); 
	ctx4.clearRect(startPostion4-1,-1,10,50); 
	ctx5.clearRect(startPostion5-1,-1,10,50); 
	
	
	ctx6.fillStyle="#"+rgb_r+rgb_g+rgb_b;
	ctx1.fillStyle="#"+rgb_r+rgb_g+rgb_b;
	ctx2.fillStyle="#"+rgb_r+rgb_g+rgb_b;
	ctx3.fillStyle="#"+rgb_r+rgb_g+rgb_b;
	ctx4.fillStyle="#"+rgb_r+rgb_g+rgb_b;
	ctx5.fillStyle="#"+rgb_r+rgb_g+rgb_b;
	
	
	ctx6.fillRect(startPostion+initialVelocity,0,10,10);
	ctx1.fillRect(startPostion1+initialVelocity1,0,10,10);
	ctx2.fillRect(startPostion2+initialVelocity2,0,10,10);
	ctx3.fillRect(startPostion3+initialVelocity3,0,10,10);
	ctx4.fillRect(startPostion4+initialVelocity4,0,10,10);
	ctx5.fillRect(startPostion5+initialVelocity5,0,10,10);
	
	startPostion+=initialVelocity
	startPostion1+=initialVelocity1
	startPostion2+=initialVelocity2
	startPostion3+=initialVelocity3
	startPostion4+=initialVelocity4
	startPostion5+=initialVelocity5
	
	time++
	
	rgb_r=parseInt(rgb_r,16)
	rgb_g=parseInt(rgb_g,16)
	rgb_b=parseInt(rgb_b,16)
	if(rgb_r<251){
	rgb_r+=8
	}
	if(rgb_b<251){
	rgb_b+=8
	}
	if(rgb_g<251){
	rgb_g+=8
	}
	rgb_r=rgb_r.toString(16)
	rgb_g=rgb_g.toString(16)
	rgb_b=rgb_b.toString(16)
	
	}
	else{
	clearInterval(expProcess)
	startPostion=0;
	startPostion1=0
	startPostion2=0
	startPostion3=0
	startPostion4=0
	startPostion5=0
	time=0;
	rgb_r="21"
	rgb_g="96"
	rgb_b="f3"

	ctx6.restore();
	ctx1.restore();
	ctx2.restore();
	ctx3.restore();
	ctx4.restore();
	ctx5.restore();
	
	
	ctx6.clearRect(0,0,650,350); 
	ctx1.clearRect(0,0,650,350); 
	ctx2.clearRect(0,0,650,350); 
	ctx3.clearRect(0,0,650,350); 
	ctx4.clearRect(0,0,650,350); 
	ctx5.clearRect(0,0,650,350);
	
	isGoing=false;
	}
	}

//////////////////±¬Õ¨Àà//////////////////////////

		function explosive() {
		var initialVelocity = Math.floor(6*Math.random()+1);
		var initialVelocity1 = Math.floor(6*Math.random()+1);
		var initialVelocity2 = Math.floor(6*Math.random()+1);
		var initialVelocity3 = Math.floor(6*Math.random()+1);
		var initialVelocity4 = Math.floor(6*Math.random()+1);
		var initialVelocity5 = Math.floor(6*Math.random()+1);
		
		var initialAngle = Math.floor(360*Math.random());
		var initialAngle1 = Math.floor(360*Math.random());
		var initialAngle2 = Math.floor(360*Math.random());
		var initialAngle3 = Math.floor(360*Math.random());
		var initialAngle4 = Math.floor(360*Math.random());
		var initialAngle5 = Math.floor(360*Math.random());
		
		ctx6.save();
		ctx1.save();
		ctx2.save();
		ctx3.save();
		ctx4.save();
		ctx5.save();
		
		
		expProcess = setInterval(function(){drawExplosive(initialVelocity,initialVelocity1,initialVelocity2,initialVelocity3,initialVelocity4,initialVelocity5)},16.7)
		
		ctx6.translate(playerX+20, 330-playerY)
		ctx1.translate(playerX+20, 330-playerY)
		ctx2.translate(playerX+20, 330-playerY)
		ctx3.translate(playerX+20, 330-playerY)
		ctx4.translate(playerX+20, 330-playerY)
		ctx5.translate(playerX+20, 330-playerY)
		
		
		ctx6.rotate(initialAngle * Math.PI/180)	
		ctx1.rotate(initialAngle1 * Math.PI/180)	
		ctx2.rotate(initialAngle2 * Math.PI/180)	
		ctx3.rotate(initialAngle3 * Math.PI/180)
		ctx4.rotate(initialAngle4 * Math.PI/180)	
		ctx5.rotate(initialAngle5 * Math.PI/180)	
	}

		



//////////////////±¬Õ¨Àà//////////////////////////
function bloom(){
if(!isGoing){
explosive()
isGoing=true;
}
}
