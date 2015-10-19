var gameWon = false

function move(playerNo) { 
	// $(this).attr("class", "" ) 
 		var currentNo = parseInt($(".player" + playerNo + " .current").attr('id'))
 		$(".player" + playerNo + " .current").toggleClass("current")
 		$(".player" + playerNo + " #" + (currentNo+1)).toggleClass("current")
 		if (currentNo == 10) { win(playerNo);
 			gameWon = true }
 			console.log(currentNo)


}




function keyPresses() {
	if (gameWon == false) {
		$(document).keydown( function(event) {
		 	if  (event.keyCode == 65) {
		 		move(1)
		 	} 
		 	if (event.keyCode == 76) {
		 		move(2)
		 	}
		}); 
	}
}

function win(playerNo) {alert("Player " + playerNo + " claims victory!")} 


$(document).ready(keyPresses())
