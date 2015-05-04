var window_width = 1024;
var window_height = 768;
var radius = 8;
var margin_top = 60;
var margin_left = 30;
var endTime = new Date(2015,4,5,18,47,52);
var csts = 0;

window.onload = function () {
			var canvas = document.getElementById('canvas');
			canvas.width = window_width;
			canvas.height = window_height;
			var context = canvas.getContext("2d");
			csts = getcsts();
			render(context);

		}
function getcsts () {
	var curTime = new Date();
	var ret = endTime.getTime() - curTime.getTime();
	ret = Math.round(ret/1000)
	
	return ret>=0?ret:0;
}

function render (cxt) {
	var hours = parseInt(csts/3600);
	var minutes = parseInt((csts - hours*3600)/60);
	var seconds = csts%60;
    
	renderDigit(margin_left,margin_top,parseInt(hours/10),cxt);
	renderDigit(margin_left + 15*(radius+1),margin_top,parseInt(hours%10),cxt);
	renderDigit(margin_left + 30*(radius+1),margin_top,10,cxt);
	renderDigit(margin_left + 39*(radius+1),margin_top,parseInt(minutes/10),cxt);
	renderDigit(margin_left + 54*(radius+1),margin_top,parseInt(minutes%10),cxt);
	renderDigit(margin_left + 69*(radius+1),margin_top,10,cxt);
	renderDigit(margin_left + 78*(radius+1),margin_top,parseInt(seconds/10),cxt);
	renderDigit(margin_left + 93*(radius+1),margin_top,parseInt(seconds%10),cxt);

}

function renderDigit(x,y,num,cxt){
	cxt.fillStyle = "blue";
	for(var i = 0;i<digit[num].length;i++){
		for(var j = 0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				cxt.beginPath();
				cxt.arc(x+j*2*(radius+1)+(radius+1),y+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}