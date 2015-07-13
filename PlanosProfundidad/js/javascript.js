$(document).mousemove(function(event){
	
	    var posX = event.clientX/10;
		var posY = event.clientY/10;
		
		console.log(posX, posY)
		$("#plano1").css("background-position",posX*-4+"px "+posY*-0.5+"px");
		$("#plano2").css("background-position",posX*-2+"px "+posY*-0.3+"px");
		$("#plano3").css("background-position",posX*-4+"px "+posY*-0.1+"px");
	})