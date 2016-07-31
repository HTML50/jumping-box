
canvasBg = document.getElementById("background");
ctxBg=canvasBg.getContext("2d");
ctxBg.fillStyle="#9b59b6";

var objWidth=26

//画出障碍物
function createObstacles(level){
	ctxBg.clearRect(0,0,canvas.width,canvas.height); 
	for(i=0;i<levelMap[level].length;i++){
		if(levelMap[level][i]<100){
			drawObstacle(i,levelMap[level][i])
		}
		else if(levelMap[level][i]=='f'){
			drawFloat(i)
			}
	}

}

//貌似手机显示不了动画，要么加判断，要么研究如何显示
function drawObstacle(position,height){
	var objHeight=0
	var thisProcess=setInterval(function(){
		if(objHeight<height){
			ctxBg.fillRect(objWidth*position,canvas.height-objHeight,objWidth,objHeight);
			objHeight+=1
		}
		else{
			clearInterval(thisProcess)
		}
	},5)
}

//浮动横条高度为20
function drawFloat(position){
	var objHeight=0
	var thisProcess=setInterval(function(){
		if(objHeight<20){
			ctxBg.fillRect(objWidth*position,canvas.height-objHeight-playerRadius*2-1,objWidth,objHeight);
			objHeight+=1
			
		}
		else{
			clearInterval(thisProcess)
		}
	},5)
}
