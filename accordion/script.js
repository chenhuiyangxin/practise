var div1=document.getElementById('subject');
var lis=div1.getElementsByTagName('li');
for(var i=0;i<lis.length;i++){
	lis[i].onmouseover=function() {
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
		}
		this.className="big";
	}
}