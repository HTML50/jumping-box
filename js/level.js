
canvasBg = document.getElementById("background");
ctxBg=canvasBg.getContext("2d");
ctxBg.fillStyle="#9b59b6";

var objWidth=26

//�����ϰ���
function createObstacles(level){
	ctxBg.clearRect(0,0,canvas.width,canvas.height); 
	for(i=0;i<levelMap[level].length;i++){
		if(levelMap[level][i]!=0){
			drawObstacle(i,levelMap[level][i])
		}
	}

}

//ò���ֻ���ʾ���˶�����Ҫô���жϣ�Ҫô�о������ʾ
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


