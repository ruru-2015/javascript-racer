var i = 1
var j = 1
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'cat.mp3')
$(document).keypress(function(e) {
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement.play();

  if(e.which == 113) {
    $('.player1 .' + i).css('background-color', 'green');
    i++;

    if (i == 12 && j < 12) {
      alert("Player One has won! Feel incredible shame, Player Two.");
      endgame();
      }
  } else if (e.which == 112){
    $('.player2 .' + j).css('background-color', 'blue');
    j++;

    if (j == 12 && i < 12) {
      alert("Player Two has won! Player One must commit Seppuku.");
      endgame();
    }
  }
});

function endgame() {

  $('.gameEnd').attr('src', "http://i.ytimg.com/vi/vJaAy3jmEx8/maxresdefault.jpg");

}
