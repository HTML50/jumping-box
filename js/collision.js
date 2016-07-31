function collision(level){
if(levelMap[level]!=null){
for(i=0;i<levelMap[level].length;i++){
		if(levelMap[level][i]>0){
			if(playerX+playerRadius>=i*objWidth && playerX-playerRadius<=i*objWidth+objWidth && playerY<=levelMap[level][i]+playerRadius){
			return true;
			}
		}
		
		else if(levelMap[level][i]=='f'){
				if(playerX+playerRadius>=i*objWidth && playerX-playerRadius<=i*objWidth+objWidth &&playerY>15 && playerY<50){
				return true;
				}
		
		}
	}
}
}